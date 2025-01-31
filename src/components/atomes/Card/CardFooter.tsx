import { ICardFooterProps } from "@atomes/Card";
import { cn } from "@lib/utils";

export const CardFooter: React.FC<ICardFooterProps> = ({ children, className }) => {
    return <div className={cn("flex items-center p-6 pt-0", className)}>{children}</div>;
};
