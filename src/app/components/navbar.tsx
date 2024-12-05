"use client";

import { AlignJustify } from "lucide-react";
import { navBarItems } from "@/lib/constants";
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AnimatePresence, motion } from "motion/react";

export function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between border-b-2">
      <div className="ml-4 mt-4 cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
      <div>
        <div className="z-20 m-4 p-2 bg-slate-100 rounded-md cursor-pointer relative">
          <AlignJustify onClick={() => clickHandler()} />
        </div>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                key={"sidebar"}
                className="mt-4 z-20 absolute w-[15vw] right-[2%] bg-slate-50 rounded-lg overflow-hidden pb-4"
                layout
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                {navBarItems.map((group, index) => (
                  <div key={index}>
                    <p className="text-sm ml-6 my-3 text-gray-600">
                      {group.groupName}
                    </p>
                    {group.item.map((item) => (
                      <div key={item.label} className="bg-gray-200">
                        <div className="pl-6 pt-2 pb-2 flex gap-4 bg-slate-50 hover:cursor-pointer hover:bg-gray-200 ease-in-out duration-300 hover:translate-x-2">
                          {item.Icon}
                          <p className="">{item.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="left-0 top-0 fixed h-screen w-screen z-10 backdrop-brightness-50"
            onClick={() => clickHandler()}
          />
        )}
      </div>
    </div>
  );
}
