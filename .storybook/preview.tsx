import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import theme from '../src/styles/material/theme';
import React from 'react';

const indexTheme = createTheme(theme);

export const decorators = [
  (Story: any) => (
    <ThemeProvider theme={indexTheme}>
      <Story />
    </ThemeProvider>
  ),
];