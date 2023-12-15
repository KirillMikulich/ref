declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    Primary: true;
    Secondary: true;
    Text: true;
  }
};

export * from './Primary';
export * from './Secondary';
export * from './Text';
