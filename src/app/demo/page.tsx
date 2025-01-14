import { query } from "@/lib/ApolloClient";
import { GET_HOME_PAGE_DATA } from "@/graphql/home-data";
import { HomeData } from "@/lib/types";
import { ErrorPage } from "../components/error-page";
import { RenderContent } from "../components/render-content-data";
import { HomeBadge } from "../page-components/home-page/badges";
import { getHeaders } from "@/lib/utils";
import { header } from "motion/react-client";
import { TableOfContent } from "../page-components/posts-page/post-table-of-contents";

export default async function () {
  try {
    const { data } = await query<HomeData>({ query: GET_HOME_PAGE_DATA });
    // const headers = data?.post?.content?.filter(getHeaders);

    const headers1 = data?.homePage.content?.filter(getHeaders);
    const headers2 = data?.homePage.midcontent?.filter(getHeaders);
    const headers3 = data?.homePage.lastcontent?.filter(getHeaders);

    const headers = headers1.concat(headers2, headers3);

    return (
      <div className="pt-[5vh] font-[family-name:var(--font-montserrat)] h-screen px-[5vw] md:w-4/5 overflow-auto homescrollbar flex">
        <div className="w-4/5 mr-[5vw]">
          <RenderContent data={data?.homePage.content} />
          <div className="md:flex mt-6 md:gap-8 grid-col">
            {data?.homePage?.header_tag.map(({ id, tag }) => {
              return <HomeBadge label={tag} uri="#" key={id} />;
            })}
          </div>
          <RenderContent data={data?.homePage.midcontent} />
          <RenderContent data={data?.homePage.lastcontent} />
        </div>
        <div className="w-1/5">
          <TableOfContent headers={headers} />
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <ErrorPage />;
  }
}
