import { createStyles, fade, Theme } from "@material-ui/core/styles";
import { colors } from "shared/constants/colors";

export default function style ({ spacing }: Theme) {
  return createStyles({
    root: {
      padding: spacing(2, 4),
      display: 'flex',
      alignItems: 'center',
      width: 200,
      height: 24,
      background: fade(colors.white, 0.1),
      border: `1px solid ${colors.grey}`
    },
    input: {
      marginLeft: 4,
      flex: 1,
      color: colors.white,
      fontWeight: 400,
      fontSize: 14
    },
    iconButton: {
      padding: 0
    },
    icon: {
      color: colors.white
    }
  });
}