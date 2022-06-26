import React, { MouseEventHandler } from 'react';

interface ButtonProps {
    label?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
}
declare const Button: React.FC<ButtonProps>;

export { Button };
