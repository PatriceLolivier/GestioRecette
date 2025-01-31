import * as React from "react";
import { cn } from "@lib/utils";
import { ICardProps } from "@atomes/Card";

const Card = React.forwardRef<HTMLDivElement, ICardProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";

export { Card };
