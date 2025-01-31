export interface ITextProps {
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    className?: string;
    children: React.ReactNode;
    color?: "primary" | "secondary" | "danger" | "success";
    weight?: "light" | "normal" | "bold";
    onClick?: () => void,
    path?: string
  }
  