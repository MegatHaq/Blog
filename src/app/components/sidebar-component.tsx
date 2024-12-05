"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "motion/react";

interface Item {
  label: string;
  uri: string;
}

type SideBarProps = {
  header: string;
  item: Item[];
};

export function SideBarComponent(props: SideBarProps) {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const { header, item } = props;

  const [isOpen, setIsOpen] = React.useState(true);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const IconClass = isOpen ? "rotate-90" : "";

  return (
    <div className="my-2 ml-2">
      <div
        onClick={() => clickHandler()}
        className="hover:cursor-pointer flex gap-2"
      >
        <h1 className="text-1xl font-bold">{header}</h1>
        <ChevronRight
          className={`text-gray-400 ease-in-out duration-200 ${IconClass} z-0`}
        />
      </div>
      {isOpen && (
        <motion.div variants={container} intitial="hidden" animate="show">
          {item.map((item) => (
            <AnimatePresence key={item.label}>
              {isOpen && (
                <motion.div
                  layout
                  transition={{ duration: 0.1 }}
                  className={`hover:bg-blue-100 p-2 ml-2 mr-8 rounded-md flex hover:cursor-pointer`}
                >
                  <Link className={`text-sm`} href={item.uri}>
                    {item.label}
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </motion.div>
      )}
    </div>
  );
}
