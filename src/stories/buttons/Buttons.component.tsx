import React, { type FC } from "react";
import { Button, ButtonProps } from "@mui/material";

export interface StyledButtonProps extends ButtonProps {
  label?: string
}

const StyledButton: FC<StyledButtonProps> = ({label, ...rest}) => <Button {...rest}>{label}</Button>;

export default StyledButton;