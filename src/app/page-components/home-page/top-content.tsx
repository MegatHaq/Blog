import { HomeData } from "@/lib/types";
import { RenderContent } from "./content-render";

type TopContentProps = {
  homeData: HomeData;
};

export const TopContent = ({ homeData }: TopContentProps) => {
  return (
    <div className="mb-[5vh]">
      {homeData.content.map(({ children, type, level }, index) => {
        return (
          <div key={index} className="">
            {children.map(({ text }) => {
              return <RenderContent type={type} text={text} level={level} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
