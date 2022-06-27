import React, { MouseEventHandler } from "react";
export interface ButtonProps {
    label?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
