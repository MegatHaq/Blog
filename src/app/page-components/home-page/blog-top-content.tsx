"use client";

import { badgeContent } from "@/lib/constants";
import { HomeBadge } from "./badges";
import { useRef } from "react";
import { useInView, motion } from "motion/react";

// ADD 3 LATEST POSTS TO THE BOTTOM OF OF THE BLOG

export function TopContentBlog() {
  const ref = useRef(null);
  const IsInView = useInView(ref, { once: true });

  const style = {
    transform: IsInView ? "none" : "translateY(-200px)",
    opacity: IsInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  return (
    <motion.div ref={ref} style={style} className="mx-[5vw] md:mx-0">
      <h1 className="md:text-4xl text-2xl md:text-justify text-center tracking-wide mt-[10vh] font-bold">
        Welcome to my blog! My name is <span className="font-bold">Megat!</span>
      </h1>
      <p className="md:text-3xl md:text-justify text-justify mt-4">
        Welcome to my little corner of the internet where ideas come alive,
        stories unfold, and creativity knows no bounds. This blog is my canvas—a
        space to share thoughts, tips, and everything in between.
      </p>
      <div className="md:flex mt-6 md:gap-8 grid-col">
        {badgeContent.map((item) => (
          <HomeBadge key={item.label} label={item.label} uri={item.uri} />
        ))}
      </div>
      <h1 className="md:mt-[10vh] mt-[5vh] md:text-4xl text-2xl font-bold tracking-wide">
        What to expect?
      </h1>
    </motion.div>
  );
}
