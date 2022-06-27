import React, { MouseEventHandler } from "react"
import styles from "./Button.css"
export interface ButtonProps {
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label = "Click Me",
  onClick,
  disabled,
  className
}) => {
  const addedClass = className ? ` ${className}` : ""
  return (
    <button
      className={styles.helloDefaultButton + addedClass}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button;