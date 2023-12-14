import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import theme from '../src/styles/material/theme';
import React, { useEffect } from 'react';

const indexTheme = createTheme(theme);

export const decorators = [
  (Story: any) => {

    useEffect(() => {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap';
      link.rel = 'stylesheet';
  
      document.head.appendChild(link);
  
      return () => {
        document.head.removeChild(link);
      };
    }, []);

    return <ThemeProvider theme={indexTheme}>
      <Story />
    </ThemeProvider>
  }
];