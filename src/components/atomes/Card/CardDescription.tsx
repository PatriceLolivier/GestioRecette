import { ICardDescriptionProps } from "@atomes/Card";
import { cn } from "@lib/utils";


export const CardDescription: React.FC<ICardDescriptionProps> = ({ children, className }) => {
    return <div className={cn("text-sm text-muted-foreground", className)}>{children}</div>;
};
