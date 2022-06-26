import React, { MouseEventHandler } from 'react';
import {SxProps, Theme} from '@mui/material/styles';
import Button from '@mui/material/Button';

export interface MuiButtonProps {
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

const MuiButton: React.FC<MuiButtonProps> = ({
  label = "MUI click",
  onClick,
  disabled,
  sx
}) => {
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