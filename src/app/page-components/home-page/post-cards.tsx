import { PostsTitle } from "@/lib/types";
import { Gallery } from "../posts-page/gallery";
import { CardsBadge } from "./badges";

export const PostCards = (props: PostsTitle) => {
  const { category, documentId, image, publishedAt, synopsis, title } = props;

  const date = publishedAt.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/);

  return (
    <div className="w-[20vw] border-x-2 px-4 bg-slate-100 rounded-xl">
      <div className="flex justify-center">
        <Gallery
          imageUri={process.env.STRAPI_BACKEND + image.url}
          imageCaption={image.caption}
        />
      </div>
      <h1 className="text-center text-1xl font-bold">{title}</h1>
      {category.map(({ id, tag }) => {
        return <CardsBadge key={id} header={tag} />;
      })}
      <p className="text-justify text-sm mt-4">{synopsis}</p>
      <div className="flex justify-end ">
        <p className="px-2 py-1 bg-slate-700 mt-4 rounded-md text-gray-200 text-sm">
          {date}
        </p>
      </div>
    </div>
  );
};
