export default async function () {
  try {
    const data = await fetch(`${process.env.STRAPI_BACKEND}/api/home-page`);
    const homeData = await data.json();

    const number = [1, 2, 3];

    console.log(homeData);
    return (
      <div className="font-[family-name:var(--font-montserrat)] h-screen px-[5vw] md:w-4/5 overflow-auto homescrollbar mt-[5vh]">
        This is the demo
        {number.map((numb) => {
          return homeData?.data?.tags[numb];
        })}
      </div>
    );
  } catch (error) {
    return <div>Failed fetching data</div>;
  }
}
