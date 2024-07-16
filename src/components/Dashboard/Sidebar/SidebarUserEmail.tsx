import * as React from "react";

const SidebarUserEmail = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={`text-sm text-muted-foreground ${className}`}
    {...props}
  />
));

SidebarUserEmail.displayName = "SidebarUserEmail";

export { SidebarUserEmail };
