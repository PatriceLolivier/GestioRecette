import React from "react";
import { ITextProps, textVariants } from "@atomes/Text";
import { cn } from "@lib/utils";
import { useGoTo } from "@lib/utils";

export const Text = ({ type, className, children, color, weight, onClick, path }: ITextProps) => {
    const goTo = useGoTo();

    return React.createElement(
        type,
        { 
            className: cn(textVariants({ type, className, color, weight })), 
            onClick: onClick || (path ? () => goTo(path) : undefined) 
        },
        children
    );
};

