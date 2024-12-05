"use client";

import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

type HomeBadgeProps = {
  label: string;
  uri: string;
};

export function HomeBadge(props: HomeBadgeProps) {
  const { label, uri } = props;

  return (
    <motion.div
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="hover:border-blue-400 border-transparent rounded-xl px-[12px] py-[10px] hover:cursor-pointer border-2 bg-blue-100 flex gap-2 group"
    >
      <Link href={uri} className="text-sm text-blue-600">
        {label}
      </Link>
      <MoveUpRight
        className="text-blue-600 group-hover:-translate-y-1 group-hover:translate-x-1 ease-in-out duration-200"
        height={20}
      />
    </motion.div>
  );
}

type CardsBadgeProps = {
  header: string;
};

export function CardsBadge(props: CardsBadgeProps) {
  const { header } = props;

  return (
    <div className="flex">
      <p className="bg-gray-200 text-gray-700 px-2 py-1 mt-[2vh] rounded-lg text-sm ">
        {header}
      </p>
    </div>
  );
}
