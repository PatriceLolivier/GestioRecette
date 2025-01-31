import { IButtonProps } from "@atomes/Button";

export interface IFormActionsProps extends IButtonProps {
    formAction: string
    formRedirect?: string
    path?: string
}