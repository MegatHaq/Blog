import { postData } from "@/lib/types";
import Link from "next/link";

type postProps = {
  data: postData[];
};

export const Post = (props: postProps) => {
  const { data } = props;

  return (
    <div>
      {data?.map(({ title, documentId }, index) => (
        <div key={index}>
          <Link href={`/post/${documentId}`}>
            <h1>{title}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};
