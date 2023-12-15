import React, { type FC } from "react"
import { Box, TextField as MuiTextField, TextFieldProps as MuiTextFieldProps, styled } from "@mui/material";
import InputError from "../InputError";

type TextFieldProps = {
  errorMessage?: string,
  helperMessage?: string,
} & MuiTextFieldProps;

const Container = styled(Box)`

`;

const TextField: FC<TextFieldProps> = (args) => {
  const { error, errorMessage, helperMessage, ...rest } = args; 
  
  return <Container>
    {error && <InputError message={errorMessage} />}
    <MuiTextField error={error} {...rest}/>
  </Container>;
}

export default TextField;