import { HomeBadge } from "./page-components/home-page/badges";
import { badgeContent } from "@/lib/constants";
import { Cards } from "./page-components/home-page/cards";
import { cardContent } from "@/lib/constants";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-roboto)] h-screen px-[5vw] w-4/5 overflow-auto homescrollbar">
      <h1 className="text-4xl tracking-wide mt-[10vh]">
        Welcome to my blog! My name is Megat!
      </h1>
      <p className="text-3xl mt-4">
        Welcome to my little corner of the internet where ideas come alive,
        stories unfold, and creativity knows no bounds. This blog is my canvas—a
        space to share thoughts, tips, and everything in between.
      </p>
      <div className="flex mt-6 gap-8">
        {badgeContent.map((item) => (
          <HomeBadge key={item.label} label={item.label} uri={item.uri} />
        ))}
      </div>
      <h1 className="mt-[10vh] text-4xl tracking-wide">What to expect? </h1>
      <div className="mt-[5vh] flex gap-8">
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
      <h1 className="mt-[10vh] text-4xl tracking-wide">Why this blog? </h1>
      <p className="text-2xl mt-4 mb-[20vh]">
        I started this blog to connect, learn, and grow with a community of
        curious minds. Whether you re here for a quick read or to dive deep into
        a topic, I hope you find something that resonates with you. So grab a
        cup of coffee, settle in, and enjoy the journey. Lets create something
        amazing together!
      </p>
    </div>
  );
}
