import { createStyles, Theme } from '@material-ui/core/styles';
import { colors } from 'shared/constants/colors';

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {
      background: `linear-gradient(to right, ${colors.lightBlack},  ${colors.lightBlue})`,
      color: colors.white
    },
    container: {
      padding: spacing(15, 40, 8),
    },
    logoBlock: {
      maxWidth: 250,
    },
    logo: {
      width: 164
    },
    text: {
      fontSize: 12,
      fontWeight: 300,
      marginTop: spacing(3)
    },
    icon: {
      marginRight: spacing(7),
      marginTop: spacing(7),
    }
  });
}