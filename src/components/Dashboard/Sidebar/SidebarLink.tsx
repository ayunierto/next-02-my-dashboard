"use client";

import { usePathname } from "next/navigation";
import * as React from "react";

const SidebarLink = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { path: string }
>(({ className, children, path, ...props }, ref) => {
  const pathName = usePathname();

  return (
    <div
      ref={ref}
      className={`flex items-center w-full ${
        pathName == path
          ? "before:w-[3.5px] before:h-5 before:bg-primary before:rounded-2xl"
          : ""
      } `}
      {...props}
    >
      <div
        className={`flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground transition-all hover:bg-muted -ml-1 w-full ${
          pathName == path ? "bg-muted" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
});

SidebarLink.displayName = "SidebarLink";

export { SidebarLink };
