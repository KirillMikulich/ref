import { BLUE_200, BLUE_400, BLUE_50, GREY_300, LIGHT_BLUE_50 } from "styles/constants";
import { defaultStyles } from "./default";

export const Secondary: any = 
{
  props: { variant: "Secondary" },
  style: {
    ...defaultStyles,
    color: BLUE_400,
    backgroundColor: "white",
    border: `1px solid ${BLUE_400}`,
    "&:hover": {
      backgroundColor: BLUE_50
    },
    "&:focus-visible": {
      border: `2px solid ${BLUE_50}`,
      backgroundColor: BLUE_50,
    },
    "&:disabled": {
      backgroundColor: LIGHT_BLUE_50,
      color: GREY_300,
      border: "none"
    },
    "&:active": {
      backgroundColor: BLUE_200
    }
  },
};