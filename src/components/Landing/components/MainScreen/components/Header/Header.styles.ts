import { createStyles, Theme } from "@material-ui/core/styles";

import { screenSize } from "shared/constants/breakpoints";

export default function styles({ spacing, palette: { primary }, breakpoints }: Theme){

  return createStyles({
    root: {
      marginTop: spacing(4)
    },
    logoText: {
      marginLeft: spacing(2)
    },
    navMenu: {
      marginRight: spacing(3)
    },
    menuIcon: {
      display: 'none'
    },
    label: {
      color: primary.main,
    },
    [breakpoints.down(screenSize.sm)]: {
      label: {
        display: 'none'
      },
      menuIcon: {
        marginRight: spacing(2)
      }
    }
  });
}