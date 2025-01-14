import { query } from "@/lib/ApolloClient";
import { GET_HOME_PAGE_DATA } from "@/graphql/home-data";
import { HomeData } from "@/lib/types";
import { ErrorPage } from "../components/error-page";
import { RenderContent } from "../components/render-content-data";

export default async function () {
  try {
    const { data } = await query<HomeData>({ query: GET_HOME_PAGE_DATA });

    return (
      <div className="pt-[5vh] font-[family-name:var(--font-montserrat)] h-screen px-[5vw] md:w-4/5 overflow-auto homescrollbar flex">
        <div className="w-4/5">
          <RenderContent data={data?.homePage.content} />
          <RenderContent data={data?.homePage.midcontent} />
          <RenderContent data={data?.homePage.lastcontent} />
        </div>
        <div className="w-1/5"></div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <ErrorPage />;
  }
}
