import { UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import * as React from "react";

const SidebarUser = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex gap-2 h-20 items-center px-2 lg:h-[60px] lg:px-6 hover:bg-muted m-2 rounded-md ${className}`}
    {...props}
  />
));

SidebarUser.displayName = "SidebarUser";

export { SidebarUser };
