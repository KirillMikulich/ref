import { createTheme, responsiveFontSizes } from "@mui/material";
import {
  fontFamily,
  xsBreakpoint,
  smBreakpoint,
  mdBreakpoint,
  lgBreakpoint,
  xlBreakpoint,
  defaultTextColor,
  defaultBackgroundColor,
} from "styles/constants";
import { createFontFamily } from "utils";
import { MuiButton } from "./overrides";

const theme = createTheme(
  {
    palette: {},
    breakpoints: {
      values: {
        xs: xsBreakpoint,
        sm: smBreakpoint,
        md: mdBreakpoint,
        lg: lgBreakpoint,
        xl: xlBreakpoint,
      },
    },
    typography: {
      ...createFontFamily(`${fontFamily}`),
      fontSize: 12,
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiCssBaseline: {
        styleOverrides: `
        html {
          background: ${defaultBackgroundColor};
          color: ${defaultTextColor};
          font-family: ${fontFamily};
        }

        body {
          background: ${defaultBackgroundColor};
          font-family: ${fontFamily};
        }

        button {
          font-family: ${fontFamily};
        }
      `,
      },
    },
  },
  {
    components: {
      MuiButton: {...MuiButton},
    },
  }
);

export default responsiveFontSizes(theme);
