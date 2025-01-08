import { Cards } from "./page-components/home-page/cards";
import { cardContent } from "@/lib/constants";
import { WhyBlog } from "./page-components/home-page/blog-bottom-content";
import { TopContentBlog } from "./page-components/home-page/blog-top-content";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-montserrat)] h-screen px-[5vw] md:w-4/5 overflow-auto homescrollbar">
      <TopContentBlog />
      <div className="mt-[5vh] md:flex md:justify-between grid gap-12 mx-[5vw] md:mx-0">
        {cardContent.map((item) => (
          <Cards
            key={item.title}
            title={item.title}
            header={item.header}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
      <WhyBlog />
    </div>
  );
}
