import { fontFamily } from "styles/constants";

export const defaultStyles: any = {
  minHeight: "40px",
  padding: "8px 16px",
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "8px",
  fontFamily: fontFamily,
  textTransform: "inherit",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "100%",
  "& .MuiButton-startIcon": {
    margin: "0",
  },
  "& .MuiButton-endIcon": {
    margin: "0",
  }
}