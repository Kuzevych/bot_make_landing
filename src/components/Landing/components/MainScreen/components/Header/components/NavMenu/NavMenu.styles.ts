import { createStyles, Theme } from "@material-ui/core/styles";

import { colors } from "shared/constants/colors";

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {},
    navItem: {
      marginRight: spacing(10),
      color: colors.white,
      textDecoration: 'none',

      '&:last-of-type': {
        marginRight: 0
      }
    },
    navItemWithArrow: {
      display: 'flex',
      alignItems: 'center',
    }
  });
}