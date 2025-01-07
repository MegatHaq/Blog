import { Post } from "./posts";

export const PostContainer = async () => {
  // This is where the fetching occurs.

  try {
    const data = await fetch(`${process.env.STRAPI_BACKEND}/api/posts`);
    const posts = await data.json();

    return (
      <div>
        A list of the posts
        <div>
          <Post data={posts?.data} />
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <div>Error fetching data.</div>;
  }
};
