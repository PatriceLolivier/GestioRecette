import { ICardTitleProps } from "@atomes/Card";
import { cn } from "@lib/utils";

export const CardTitle: React.FC<ICardTitleProps> = ({ children, className }) => {
    return <div className={cn("font-semibold leading-none tracking-tight", className)}>{children}</div>;
};
