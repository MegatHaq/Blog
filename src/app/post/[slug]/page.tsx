import { ErrorPage } from "@/app/components/error-page";
import { TableOfContent } from "@/app/page-components/posts-page/post-table-of-contents";
import { contentData } from "@/lib/types";
import { getHeaders } from "@/lib/utils";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

type Params = Promise<{ slug: string }>;

type PostContentProps = {
  data: contentData[];
};

type postChildrenProps = {
  type: string;
  text: string;
  level: number;
};

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;

  const textSize = [null, 3, 2, 1];

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

  const PostChildren = (props: postChildrenProps) => {
    const { type, text, level } = props;

    let className = "";
    if (type === "heading") {
      className = `text-${textSize[level]}xl font-bold my-4`;
    } else {
      className = `text-1xl`;
    }

    return <p className={className}>{text}</p>;
  };

  const PostContent = ({ data }: PostContentProps) => {
    return (
      <div>
        {data.map(({ children, type, level }) => {
          return children.map(({ text }) => {
            return <PostChildren text={text} type={type} level={level} />;
          });
        })}
      </div>
    );
  };

  try {
    const data = await fetch(`${process.env.STRAPI_BACKEND}/api/posts/${slug}`);
    const posts = await data.json();

    const headers = posts?.data?.content?.filter(getHeaders);

    const publishedDate = posts?.data?.publishedAt.match(
      /[0-9]{4}-[0-9]{2}-[0-9]{2}/
    );

    return (
      <div className="pt-[5vh] font-[family-name:var(--font-montserrat)] h-screen px-[5vw] md:w-4/5 overflow-auto homescrollbar flex">
        <div className="w-4/5 mr-[5vw]">
          <h1 className="text-3xl font-bold">{posts?.data?.title}</h1>
          <h2 className="text-1xl mt-4">Date : {publishedDate}</h2>
          <article className="mt-6 text-justify">
            <PostContent data={posts?.data?.content} />
          </article>
          <div className="mt-8 pb-[20vh]">
            <BackButton>BACK</BackButton>
          </div>
        </div>
        <div className="w-1/5">
          <TableOfContent headers={headers} />
        </div>
      </div>
    );
  } catch (error) {
    return <ErrorPage />;
  }
}
