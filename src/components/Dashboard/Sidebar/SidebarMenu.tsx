import * as React from "react";

const SidebarMenu = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={`flex-1 ${className}`} {...props}>
    <nav className="grid items-start gap-1 px-2 text-sm font-medium lg:px-4">
      {children}
    </nav>
  </div>
));

SidebarMenu.displayName = "SidebarMenu";

export { SidebarMenu };
