import { contentData } from "@/lib/types";
import { Post } from "./posts";
import { TableOfContent } from "./post-table-of-contents";

export const PostContainer = async () => {
  // This is where the fetching occurs.

  function getHeaders(contentData: contentData) {
    if (contentData.type == "heading") {
      return contentData;
    }
  }

  try {
    const data = await fetch(`${process.env.STRAPI_BACKEND}/api/posts`);
    const posts = await data.json();

    const headers = posts?.data[1]?.content?.filter(getHeaders);
    return (
      <div className="flex">
        <div className="w-4/5">
          <Post data={posts?.data} />
        </div>
        <div className="w-1/5">
          <TableOfContent headers={headers} />
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <div>Error fetching data.</div>;
  }
};
