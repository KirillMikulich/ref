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
      fontFamily: createFontFamily(`${fontFamily}`),
      fontSize: 12,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        html {
          background: ${defaultBackgroundColor};
          color: ${defaultTextColor};
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
    components: {},
  }
);

export default responsiveFontSizes(theme);
