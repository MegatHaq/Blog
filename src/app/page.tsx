import { query } from "@/lib/ApolloClient";
import { GET_HOME_PAGE_DATA } from "@/graphql/home-data";
import { Card, contentData, HeaderTag, HomeData } from "@/lib/types";
import { ErrorPage } from "./components/error-page";
import { RenderContent } from "./components/render-content-data";
import { HomeBadge } from "./page-components/home-page/badges";
import { Cards } from "./page-components/home-page/cards";
import { getHeaders } from "@/lib/utils";
import { TableOfContent } from "./page-components/posts-page/post-table-of-contents";

export default async function () {
  const MainContent = ({
    content,
    tags,
    cards,
  }: {
    content: contentData[];
    tags?: HeaderTag[];
    cards?: Card[];
  }) => {
    return (
      <div className="mb-[5vh]">
        <RenderContent data={content} />
        {tags && (
          <div className="flex gap-4 mt-[2vh]">
            {tags.map(({ tag, id }) => {
              return <HomeBadge label={tag} uri="#" key={id} />;
            })}
          </div>
        )}
        {cards && (
          <div className="flex gap-4">
            {cards.map(({ id, image_description, image_tag, image }) => {
              return (
                <Cards
                  image={process.env.STRAPI_BACKEND + image.url}
                  title={image.caption}
                  key={id}
                  description={image_description}
                  image_tag={image_tag}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  };

  try {
    const { data } = await query<HomeData>({ query: GET_HOME_PAGE_DATA });

    const headers = data?.homePage?.main_content
      .flatMap(({ content }) => [content])
      .flat()
      .filter(getHeaders);

    return (
      <div className="pt-[4vh] font-[family-name:var(--font-montserrat)] h-screen px-[5vw] md:w-4/5 overflow-auto homescrollbar flex">
        <div className="w-4/5 mr-[5vw]">
          {data?.homePage?.main_content.map(({ id, content, tags, card }) => {
            return (
              <MainContent
                key={id}
                content={content}
                tags={tags}
                cards={card}
              />
            );
          })}

          <div className="pb-[20vh]"></div>
        </div>
        <div className="w-1/5 pt-[2vh]">
          <TableOfContent headers={headers} />
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <ErrorPage />;
  }
}
