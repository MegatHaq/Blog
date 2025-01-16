"use client";

import { CardsBadge } from "./badges";
import { useRef } from "react";
import { useInView, motion } from "motion/react";
import { ImageTag } from "@/lib/types";

type CardsProps = {
  title: string;
  image: string;
  description: string;
  image_tag: ImageTag[];
};

export function Cards(props: CardsProps) {
  const { title, image, image_tag, description } = props;

  const ref = useRef(null);
  const IsInView = useInView(ref, { once: true });

  const style = {
    transform: IsInView ? "none" : "translateY(-200px)",
    opacity: IsInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  return (
    <motion.div className="w-full" ref={ref} style={style}>
      <h1 className="text-2xl font-bold mb-[3vh]">{title}</h1>
      <motion.div className="group w-full hover:-translate-y-6 ease-in-out duration-300">
        <img
          key={image}
          src={image}
          width={400}
          height={400}
          alt=""
          className="rounded-md"
        />
      </motion.div>
      {image_tag.map(({ tag, id }) => {
        return <CardsBadge header={tag} key={id} />;
      })}
      <motion.p className="text-sm mt-[2vh] text-justify">
        {description}
      </motion.p>
    </motion.div>
  );
}
