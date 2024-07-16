import { Settings } from "lucide-react";
import Link from "next/link";

import * as React from "react";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={`hidden md:block border-r ${className}`} {...props}>
    <div className="flex h-full max-h-screen flex-col gap-2">{children}</div>
  </div>
));

Sidebar.displayName = "Sidebar";

export { Sidebar };
