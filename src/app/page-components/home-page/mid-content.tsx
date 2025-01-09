import { HomeData } from "@/lib/types";

type MiddleContentProps = {
  homeData: HomeData;
};

export const MiddleContent = ({ homeData }: MiddleContentProps) => {
  return <div>This is the middle content</div>;
};
