import { contentData } from "@/lib/types";
import { twMerge } from "tailwind-merge";

type RenderContentProps = {
  data: contentData[];
};

type ContentChildrenProps = {
  type: string;
  text: string;
  level: number;
};

// this is for rendering json-based content data from strapi backend .

export const ContentChildren = (props: ContentChildrenProps) => {
  const { type, text, level } = props;

  const baseClass = "";

  const additionalClasses =
    type !== "heading"
      ? "text-1xl font-[family-name:var(--font-nunito)]"
      : level == 1
        ? "text-3xl font-bold my-4"
        : level == 2
          ? "text-2xl font-bold my-4"
          : "text-1xl font-bold my-4";

  const combinedClass = twMerge(baseClass, additionalClasses);

  return <p className={combinedClass}>{text}</p>;
};

export const RenderContent = ({ data }: RenderContentProps) => {
  return (
    <div>
      {data.map(({ children, type, level }) => {
        return children.map(({ text }) => {
          return <ContentChildren text={text} type={type} level={level} />;
        });
      })}
    </div>
  );
};
