"use client";

import Image from "next/image";
import { CardsBadge } from "./badges";
import { useRef } from "react";
import { useInView, motion } from "motion/react";

type CardsProps = {
  title: string;
  image: string;
  header: string;
  description: string;
};

export function Cards(props: CardsProps) {
  const { title, image, header, description } = props;

  const ref = useRef(null);
  const IsInView = useInView(ref, { once: true });

  const style = {
    transform: IsInView ? "none" : "translateY(-200px)",
    opacity: IsInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  return (
    <motion.div className="md:w-[350px]" ref={ref} style={style}>
      <h1 className="text-2xl font-bold">{title}</h1>
      <Image
        src={image}
        width={400}
        height={400}
        alt=""
        className="mt-[5vh] rounded-md hover:-translate-y-6 ease-in-out duration-300"
      />
      <CardsBadge header={header} />
      <motion.p className="text-sm mt-[2vh] text-justify">
        {description}
      </motion.p>
    </motion.div>
  );
}
