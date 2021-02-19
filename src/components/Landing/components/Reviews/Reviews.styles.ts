import { createStyles, Theme } from '@material-ui/core/styles';
import { colors } from 'shared/constants/colors';
import { CSSProperties } from '@material-ui/styles';


export default function styles({ spacing }: Theme) {

  const width: CSSProperties = {
    width: '50%'
  };

  return createStyles({
    root: {
      background: `linear-gradient(to right, ${colors.lightBlack},  ${colors.lightBlue})`,
      color: colors.white
    },
    container: {
      padding: spacing(15, 40),
      textAlign: 'center'
    },
    reviewContainer: {
      marginTop: spacing(8)
    },
    reviewsLeft: {
      ...width,
      marginRight: spacing(3)
    },
    reviewsRight: {
      ...width
    },
    review: {
      background: colors.white,
      borderRadius: 8,
      marginTop: spacing(3),
      padding: spacing(5),

      '&:first-of-type': {
        marginTop: 0,
      }
    }
  });
}