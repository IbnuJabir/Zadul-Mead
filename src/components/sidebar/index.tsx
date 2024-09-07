import React, { useState, ReactNode } from "react";
import Sidebar from "./SideBar";
import MenuBarMobile from "./MenuBarMobile";
import { LayoutProps } from "@/lib/types";

export default function Layout({ children }: LayoutProps) {
  // Mobile sidebar visibility state
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <div className="min-h-screen">
        <div className="flex">
          <MenuBarMobile setter={setShowSidebar} />
          <Sidebar show={showSidebar} setter={setShowSidebar} />
          <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
