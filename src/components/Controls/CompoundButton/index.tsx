import React, { type FC } from "react";
import { Button, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { BLUE_400, GREY_300, GREY_700, TABLE_BLUE_100, TABLE_BLUE_50 } from "styles/constants";

export interface Props {
  label?: string,
  text?: string,
  onClick?: () => void,
  disabled?: boolean,
}

const StyledButton = styled(Button)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  textTransform: "inherit",
  alignItems: "flex-start",
  padding: "24px",
  width: "318px",
  borderRadius: "8px",
  border: `1px solid ${BLUE_400}`,
  backgroundColor: "white",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: TABLE_BLUE_50,
  },
  "&:focus-visible": {
    border: `3px solid ${BLUE_400}`,
    backgroundColor: TABLE_BLUE_50,
  },
  "&:active": {
    backgroundColor: TABLE_BLUE_100,
  },
  "&:disabled": {
    border: `1px solid ${GREY_300}`,
    backgroundColor: "white",
  }
});

const Title = styled(Typography)<{disabled?: boolean}>`
  color: ${({disabled}) => (disabled ? GREY_300 : BLUE_400)};
  text-align: start;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const Text = styled(Typography)<{disabled?: boolean}>`
  color: ${({disabled}) => (disabled ? GREY_300 : GREY_700)};
  text-align: start;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

const CompoundButton: FC<Props> = ({label, text, onClick = undefined, disabled = false}) => {
  return <StyledButton disabled={disabled} onClick={onClick}>
    <Title disabled={disabled}>{label}</Title>
    <Text disabled={disabled}>{text}</Text>
  </StyledButton>;
}

export default CompoundButton;