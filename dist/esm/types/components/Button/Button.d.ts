import React, { MouseEventHandler } from "react";
import "./Button.css";
export interface ButtonProps {
    label?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
