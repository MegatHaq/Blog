import { query } from "@/lib/ApolloClient";
import { GET_HOME_PAGE_DATA } from "@/graphql/home-data";
import {
  Card,
  contentData,
  HeaderTag,
  HomeData,
  PostsTitleList,
} from "@/lib/types";
import { ErrorPage } from "../components/error-page";
import { RenderContent } from "../components/render-content-data";
import { HomeBadge } from "../page-components/home-page/badges";
import { Cards } from "../page-components/home-page/cards";
import { getHeaders } from "@/lib/utils";
import { TableOfContent } from "../page-components/posts-page/post-table-of-contents";
import { Loader } from "../components/loader";
import { PostCards } from "../page-components/home-page/post-cards";
import { GET_POSTS } from "@/graphql/post";

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
    const { data, loading } = await query<HomeData>({
      query: GET_HOME_PAGE_DATA,
    });

    const { data: dataCards } = await query<PostsTitleList>({
      query: GET_POSTS,
    });

    const headers = data?.homePage?.main_content
      .flatMap(({ content }) => [content])
      .flat()
      .filter(getHeaders);

    if (loading) {
      return <Loader />;
    }

    return (
      <div className="pt-[4vh] font-[family-name:var(--font-montserrat)] h-screen md:w-4/5 overflow-auto homescrollbar flex gap-4">
        <div className="w-4/5 px-[3vw]">
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
          <div className="pb-[20vh]">
            {dataCards.posts.map(
              ({
                category,
                documentId,
                image,
                publishedAt,
                synopsis,
                title,
              }) => {
                return (
                  <PostCards
                    key={documentId}
                    category={category}
                    documentId={documentId}
                    image={image}
                    publishedAt={publishedAt}
                    synopsis={synopsis}
                    title={title}
                  />
                );
              }
            )}
          </div>
        </div>
        <div className="w-1/5 pt-[2vh] sticky top-0">
          <TableOfContent headers={headers} />
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <ErrorPage />;
  }
}
