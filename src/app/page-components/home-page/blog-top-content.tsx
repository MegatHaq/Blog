"use client";

import { badgeContent } from "@/lib/constants";
import { HomeBadge } from "./badges";
import { useRef } from "react";
import { useInView, motion } from "motion/react";

export function TopContentBlog() {
  const ref = useRef(null);
  const IsInView = useInView(ref, { once: true });

  const style = {
    transform: IsInView ? "none" : "translateY(-200px)",
    opacity: IsInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  return (
    <motion.div ref={ref} style={style}>
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
    </motion.div>
  );
}
