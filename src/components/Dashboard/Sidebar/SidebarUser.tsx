import { UserRound } from "lucide-react";
import Link from "next/link";

import * as React from "react";

const SidebarUser = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex h-20 items-center px-4 lg:h-[60px] lg:px-6 hover:bg-muted m-2 rounded-md ${className}`}
    {...props}
  >
    <Link href="/user" className="flex items-center gap-2 font-semibold">
      <UserRound
        strokeWidth={1}
        className="h-14 w-14 bg-muted rounded-full p-2"
      />
      <div className="flex flex-col">{children}</div>
    </Link>
  </div>
));

SidebarUser.displayName = "SidebarUser";

export { SidebarUser };
