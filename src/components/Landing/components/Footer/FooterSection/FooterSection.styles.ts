import { createStyles, Theme } from "@material-ui/core/styles";
import { colors } from 'shared/constants/colors';

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {},
    title: {
      fontSize: 16,
      fontWeight: 600,
      marginTop: 0
    },
    link: {
      fontSize: 12,
      fontWeight: 300,
      marginTop: spacing(2),
      color: colors.white,
      textDecoration: 'none',
      cursor: 'pointer'
    }
  });
}