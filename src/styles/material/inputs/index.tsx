declare module "@mui/material/TextField" {
  interface TextFieldPropsVariantOverrides {
    Primary: true;
    Secondary: true;
  }
};

export * from './Primary';
export * from './Secondary';