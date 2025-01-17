import { PostsTitle } from "@/lib/types";
import { Cards } from "../home-page/cards";

type postProps = {
  data: PostsTitle[];
};

export const Post = (props: postProps) => {
  const { data } = props;

  return (
    <div>
      {data.map(
        ({ documentId, synopsis, category, title, image, publishedAt }) => {
          return (
            <div key={documentId}>
              <Cards
                documentId={documentId}
                image_tag={category}
                description={synopsis}
                title={title}
                image={process.env.STRAPI_BACKEND + image.url}
                publishedAt={publishedAt}
              />
            </div>
          );
        }
      )}
    </div>
  );
};
