"use client";

import { CardsBadge } from "./badges";
import { useRef } from "react";
import { useInView, motion } from "motion/react";
import { ImageTag } from "@/lib/types";
import { useRouter } from "next/navigation";

type CardsProps = {
  title: string;
  image: string;
  description: string;
  image_tag: ImageTag[];
  publishedAt?: string;
  documentId?: string;
};

export function Cards(props: CardsProps) {
  const { title, image, image_tag, description, publishedAt, documentId } =
    props;

  const date = publishedAt?.match(/[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}/);

  const ref = useRef(null);
  const IsInView = useInView(ref, { once: true });

  const style = {
    transform: IsInView ? "none" : "translateY(-200px)",
    opacity: IsInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };

  const router = useRouter();

  function onClick(documentId: string) {
    router.push(`/post/${documentId}`);
  }

  return (
    <motion.div
      className="w-full cursor-pointer"
      ref={ref}
      style={style}
      onClick={() => {
        documentId ? onClick(documentId) : null;
      }}
    >
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
      {image_tag?.map(({ tag, id }) => {
        return <CardsBadge header={tag} key={id} />;
      })}
      <motion.p className="text-sm mt-[2vh] text-justify">
        {description}
      </motion.p>
      {publishedAt && (
        <p className="text-sm text-gray-600 flex justify-center">{date}</p>
      )}
    </motion.div>
  );
}
