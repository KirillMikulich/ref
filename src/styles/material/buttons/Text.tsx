import { BLUE_200, BLUE_400, BLUE_50, GREY_300, LIGHT_BLUE_50 } from "styles/constants";
import { defaultStyles } from "./default";

export const Text: any = 
{
  props: { variant: "Text" },
  style: {
    ...defaultStyles,
    color: BLUE_400,
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: LIGHT_BLUE_50
    },
    "&:focus": {    
      border: `2px solid ${BLUE_50}`,
      backgroundColor: LIGHT_BLUE_50,
    },
    "&:disabled": {
      color: GREY_300,
    },
    "&:active": {
      backgroundColor: BLUE_200
    }
  },
};