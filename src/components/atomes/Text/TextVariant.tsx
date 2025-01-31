import { cva } from "class-variance-authority";

export const textVariants = cva("font-sans", {
  variants: {
    type: {
      default: "text-base",
      h1: "text-4xl font-bold",
      h2: "text-3xl font-semibold",
      h3: "text-2xl font-medium",
      h4: "text-xl font-medium",
      h5: "text-lg font-medium",
      h6: "text-base font-medium",
      p: "text-base",
      span: "text-sm",
    },
    color: {
      default: "text-black",
      primary: "text-blue-600",
      secondary: "text-gray-600",
      danger: "text-red-600",
      success: "text-green-600",
    },
    weight: {
      light: "font-light",
      zgeg: "font-light",
      medium: "font-medium",
      normal: "font-normal",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    type: "h1",
    color: "default",
    weight: "normal",
  },
});
