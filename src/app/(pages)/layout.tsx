import React from "react";
import { NavBar } from "../components/navbar";
import { navBarItems } from "@/lib/constants";
import { SideBar } from "../components/sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <NavBar navBarItems={navBarItems} />
      <div className="flex">
        <SideBar />
        {children}
      </div>
    </div>
  );
}
