import React from "react";

import { FloatingDock } from "../ui/floating-dock";
import {  House , User , Phone, FolderKanban } from "lucide-react";

export function Nav() {
  const links = [
    {
      title: "Home",
      icon: (
        <House  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "About Me",
      icon: (
        <User  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/zakariae-lakhdar-3a1a21296/",
    },
    {
      title: "My Projects",
      icon: (
        <FolderKanban  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/zakariae37",
    },
    {
      title: "Contact",
      icon: (
        <Phone  className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/zakariae37",
    },
    
  ];
  return (
    <div className="flex items-center justify-center  w-full">
      <FloatingDock
        mobileClassName="translate-y-20" 
        items={links}
      />
    </div>
  );
  
}
