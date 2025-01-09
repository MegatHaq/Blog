import { getHeaders } from "@/lib/utils";
import { BottomContent } from "../page-components/home-page/bottom-content";
import { MiddleContent } from "../page-components/home-page/mid-content";
import { TopContent } from "../page-components/home-page/top-content";
import { TableOfContent } from "../page-components/posts-page/post-table-of-contents";

export default async function () {
  try {
    const data = await fetch(`${process.env.STRAPI_BACKEND}/api/home-page`);
    const homeData = await data.json();

    const headers = homeData?.data?.content?.filter(getHeaders);

    return (
      <div className="pt-[5vh] font-[family-name:var(--font-montserrat)] h-screen px-[5vw] md:w-4/5 overflow-auto homescrollbar flex">
        <div className="w-4/5">
          <TopContent homeData={homeData.data} />
          <MiddleContent homeData={homeData.data} />
          <BottomContent homeData={homeData.data} />
        </div>
        <div className="w-1/5">
          <TableOfContent headers={headers} />
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <div>Failed fetching data</div>;
  }
}
