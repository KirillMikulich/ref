import React, { useEffect, type FC } from "react";
import { Button, ButtonProps } from "@mui/material";

export interface StyledButtonProps extends ButtonProps {
  label?: string
}

const StyledButton: FC<StyledButtonProps> = ({label, ...rest}) => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap';
    link.rel = 'stylesheet';

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return <Button {...rest}>{label}</Button>;
};

export default StyledButton;