import { createStyles, fade, Theme } from "@material-ui/core/styles";
import { colors } from "shared/constants/colors";

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {
      paddingBottom: spacing(12)
    },
    benefits: {
      width: 350,
      borderRight: `1px solid ${fade(colors.white, 0.08)}`,
      padding: spacing(7, 9),

      '&:first-of-type': {
        paddingLeft: 0
      },

      '&:last-of-type': {
        borderRight: 'none',
        paddingRight: 0
      }
    },
    icon: {
      marginRight: spacing(2)
    },
    benefitTitle: {
      fontSize: 18,
      fontWeight: 600,
      margin: 0
    },
    benefitText: {
      fontSize: 14,
      fontWeight: 300,
    }
  });
}