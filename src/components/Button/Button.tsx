import React, { MouseEventHandler } from "react"
import "./Button.css"
export interface ButtonProps {
  label?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  label = "Click Me",
  disabled = false,
  onClick = () => null
}) => {
  return (
    <button
      className="hello-default-button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button;