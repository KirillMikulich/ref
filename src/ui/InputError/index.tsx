import styled from "@emotion/styled";
import { Box, SvgIcon } from "@mui/material";
import React, { type FC } from "react";
import { ReactComponent as InfoSvg } from 'assets/svg/info.svg';
import { RED_500 } from "styles/constants";

interface Props {
  message?: string,
}

const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  padding: 0px 8px;
  align-items: center;
  gap: 8px;
  justify-content: start;
  align-self: stretch;
  width: auto;
  margin-bottom: 4px;
`;

const Text = styled(Box)`
  color: ${RED_500};
  font-size: 12px;
  text-align: start;
  text-wrap: wrap;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Icon = styled(SvgIcon)`
  width: 24px;
  height: 24px;
`;

const InputError: FC<Props> = ({message}) => {
  return <Container>
    <Icon>
      <InfoSvg />
    </Icon>
    <Text>
      {message}
    </Text>
  </Container>;
}

export default InputError;