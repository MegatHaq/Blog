import { ErrorPage } from "@/app/components/error-page";
import { RenderContent } from "@/app/components/render-content-data";
import { CardsBadge } from "@/app/page-components/home-page/badges";
import { Gallery } from "@/app/page-components/posts-page/gallery";
import { TableOfContent } from "@/app/page-components/posts-page/post-table-of-contents";
import { GET_POST } from "@/graphql/post";
import { query } from "@/lib/ApolloClient";
import { PostData } from "@/lib/types";
import { getHeaders } from "@/lib/utils";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

type Params = Promise<{ slug: string }>;

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;

  const BackButton = ({ children }: { children: string | React.ReactNode }) => {
    return (
      <button className="  text-gray-900 px-4 py-2 rounded-md text-sm">
        <Link href={"/post"} className="flex gap-2">
          <MoveLeft size={20} className="" />
          {children}
        </Link>
      </button>
    );
  };

  try {
    const { data } = await query<PostData>({
      query: GET_POST,
      variables: {
        documentId: slug,
      },
    });

    const publishedDate = data?.post?.publishedAt.match(
      /[0-9]{4}-[0-9]{2}-[0-9]{2}/
    );
    const headers = data?.post?.content?.filter(getHeaders);

    return (
      <div className="pt-[5vh] font-[family-name:var(--font-montserrat)] h-screen px-[5vw] md:w-4/5 overflow-auto homescrollbar flex">
        <div className="w-4/5 mr-[5vw]">
          <h1 className="text-3xl font-bold">{data?.post?.title}</h1>
          {data?.post?.category.map(({ tag, id }) => {
            return <CardsBadge header={tag} key={id} />;
          })}
          <h2 className="text-1xl mt-4">Date : {publishedDate}</h2>
          <div className="flex justify-center w-4/5 mx-auto mt-8">
            <Gallery
              imageCaption={data?.post?.image?.caption}
              imageUri={process.env.STRAPI_BACKEND + data?.post?.image?.url}
            />
          </div>
          <article className="mt-6 text-justify">
            {/* ADD CATEGORIES TAGS/BADGES FOR EACH POST */}
            <RenderContent data={data?.post?.content} />
          </article>
          <div className="mt-8 pb-[20vh]">
            <BackButton>BACK</BackButton>
          </div>
        </div>
        <div className="w-1/5 sticky top-0">
          <TableOfContent headers={headers} />
        </div>
      </div>
    );
  } catch (error) {
    return <ErrorPage />;
  }
}
