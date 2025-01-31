import * as React from "react";

import { IButtonProps } from "@atomes/Button";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@lib/utils";
import { buttonVariants } from "@atomes/Button";
import { useGoTo } from "@lib/utils";

export const  Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, variant, size, asChild = false, onClick, path, ...props }, ref) => {
    const goTo = useGoTo();
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        onClick={onClick ? onClick : path ? () => goTo(path) : undefined}
        />
    );
  }
);

Button.displayName = "Button";
