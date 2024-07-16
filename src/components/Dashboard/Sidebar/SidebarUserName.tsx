import * as React from "react";

const SidebarUserName = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={className} {...props} />
));

SidebarUserName.displayName = "SidebarUserName";

export { SidebarUserName };
