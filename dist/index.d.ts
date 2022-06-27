import React, { MouseEventHandler } from 'react';

interface ButtonProps {
    label?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
}
declare const Button: React.FC<ButtonProps>;

export { Button };
