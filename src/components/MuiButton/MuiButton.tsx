import { Button } from '@mui/material';
import React, { MouseEventHandler } from 'react';


export interface ButtonProps {
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  sx?: {};
}

const MuiButton: React.FC<ButtonProps> = ({label = "mui click", onClick, disabled, sx }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      sx={sx}
    >
      {label}
    </Button>
  )
}

export default MuiButton