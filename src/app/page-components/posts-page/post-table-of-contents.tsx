import { contentData } from "@/lib/types";
import { AlignRight } from "lucide-react";

type tableOfContentProps = {
  headers: contentData[];
};

type headerChildrenProps = {
  children: string;
  level: number;
};

export const TableOfContent = (props: tableOfContentProps) => {
  const { headers } = props;

  const textSize = [null, "2xl", "1xl", "sm"];

  const HeaderChildren = ({ children, level }: headerChildrenProps) => {
    return (
      <div
        className={`text-sm cursor-pointer hover:text-gray-950 ml-[${
          20 * level
        }px]`}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="h-full max-h-[80vh] scrollbar overflow-auto border-l-2 border-gray-100 px-1">
      <div className="flex gap-4 mb-4">
        <AlignRight width={16} height={16} />
        <h1 className="text-sm font-bold">On this page</h1>
      </div>
      <div className="flex flex-col gap-2 text-gray-700">
        {headers.map(({ children, type, level }) => {
          return children.map(({ text }) => {
            return <HeaderChildren level={level}>{text}</HeaderChildren>;
          });
        })}
      </div>
    </div>
  );
};
