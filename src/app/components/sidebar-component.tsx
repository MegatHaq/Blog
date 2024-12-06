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
  const { header, item } = props;

  const [isOpen, setIsOpen] = React.useState(true);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const IconClass = isOpen ? "rotate-90" : "";

  const itemvariant = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 1,
    },
  };

  return (
    <div className="my-2 ml-2 overflow-hidden">
      <div
        onClick={() => clickHandler()}
        className="hover:cursor-pointer flex gap-2"
      >
        <h1 className="text-1xl font-bold">{header}</h1>
        <ChevronRight
          className={`text-gray-400 ease-in-out duration-200 ${IconClass} z-0`}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              x: -20,
            }}
            animate={{
              height: "auto",
              x: 0,
            }}
            exit={{
              height: 0,
              x: 20,
            }}
            transition={{ duration: 0.3, type: "tween" }}
          >
            {item.map((item, index) => (
              <motion.div
                layout
                key={item.label}
                variants={itemvariant}
                animate="open"
                transition={{ duration: 0.5, delay: index * 0.2 }}
                initial="closed"
                className={`hover:bg-blue-100 p-2 ml-2 mr-8 rounded-md flex hover:cursor-pointer`}
              >
                <Link className={`text-sm`} href={item.uri}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
