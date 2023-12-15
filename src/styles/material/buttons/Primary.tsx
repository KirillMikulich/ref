import { BLUE_300, BLUE_400, BLUE_50, BLUE_500, GREY_300 } from "styles/constants";
import { defaultStyles } from "./default";

export const Primary: any = 
{
  props: { variant: "primary" },
  style: {
    ...defaultStyles,
    color: "white",
    backgroundColor: BLUE_400,
    "&:hover": {
      backgroundColor: BLUE_300
    },
    "&:focus-visible": {
      backgroundColor: BLUE_300
    },
    "&:disabled": {
      backgroundColor: BLUE_50,
      color: GREY_300,
    },
    "&:active": {
      backgroundColor: BLUE_500
    }
  },
};