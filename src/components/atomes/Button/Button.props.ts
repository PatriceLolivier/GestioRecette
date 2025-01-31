import * as React from "react";

import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@atomes/Button/ButtonVariant";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  onClick?: () => void
  path?: string
}