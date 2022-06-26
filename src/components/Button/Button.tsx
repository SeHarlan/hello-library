import React, { MouseEventHandler } from "react"

export interface ButtonProps {
  label: string;
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({label = "Click Me", disabled, onClick}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button;