declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    text: true;
  }
};

export * from './Primary';
export * from './Secondary';
export * from './Text';
