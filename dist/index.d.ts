import React, { MouseEventHandler } from 'react';

interface ButtonProps {
    label?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const Button: React.FC<ButtonProps>;

export { Button };
