import React, { type FC } from "react"
import { Box, TextFieldProps as MuiTextFieldProps, styled } from "@mui/material";
import InputError from "../InputError";
import { Primary, Secondary } from "styles/material/inputs";

export type TextFieldProps = {
  errorMessage?: string,
  helperMessage?: string,
  variant?: 'primary' | 'secondary'
} & MuiTextFieldProps;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const TextField: FC<TextFieldProps> = (args) => {
  const { error, errorMessage, helperMessage, variant, ...rest } = args; 

  const Field = variant === 'primary' ? Primary : Secondary;

  return <Container>
    {error && <InputError message={errorMessage} />}
    <Field helperText={helperMessage} error={error} variant={'outlined'} {...rest}/>
  </Container>;
}

export default TextField;