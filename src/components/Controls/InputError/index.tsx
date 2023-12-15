import styled from "@emotion/styled";
import { Box, SvgIcon } from "@mui/material";
import React, { type FC } from "react";
import info from 'assets/svg/info.svg';

interface Props {
  message?: string
}

const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  padding: 0px 8px;
  align-items: start;
  gap: 8px;
  align-self: stretch;
`;

const InputError: FC<Props> = ({message}) => {
  return <Container>
    <SvgIcon>
      {info}
    </SvgIcon>
    <Box>
      {message}
    </Box>
  </Container>;
}

export default InputError;