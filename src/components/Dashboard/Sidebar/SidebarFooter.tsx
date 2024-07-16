import * as React from "react";

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`mt-auto p-4 text-sm ${className}`} {...props} />
));

SidebarFooter.displayName = "SidebarFooter";

export { SidebarFooter };
