import React, { MouseEventHandler } from 'react';

interface ButtonProps$1 {
    label?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
}
declare const Button: React.FC<ButtonProps$1>;

interface ButtonProps {
    label?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    sx?: {};
}
declare const MuiButton: React.FC<ButtonProps>;

export { Button, MuiButton };
