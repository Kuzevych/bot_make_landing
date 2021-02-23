import { createStyles, Theme } from '@material-ui/core/styles';
import { colors } from 'shared/constants/colors';
import { CSSProperties } from '@material-ui/styles';
import { screenSize } from '../../../../shared/constants/breakpoints';


export default function styles({ spacing, breakpoints, palette: { primary } }: Theme) {

  const width: CSSProperties = {
    width: '50%'
  };

  return createStyles({
    root: {
      background: `linear-gradient(to right, ${primary.main},  ${colors.lightBlue})`,
      color: colors.white
    },
    container: {
      padding: spacing(15, 40),
      textAlign: 'center'
    },
    reviewContainer: {
      margin: spacing(8, 0)
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
    },
    image: {
      width: '100%',
      objectFit: 'contain'
    },
    [breakpoints.up(screenSize.xl)]: {
      container: {
        margin: spacing(12, 'auto', 0),
        maxWidth: '60%',
        width: '60%',
        padding: 0
      },
    },
    [breakpoints.down(screenSize.lg)]: {
      container: {
        margin: spacing(12, 20),
        padding: spacing(4, 0, 0)
      }
    },
    [breakpoints.down(screenSize.md)]: {
      container: {
        margin: spacing(4, 10)
      },
    },
    [breakpoints.down(screenSize.sm)]: {
      container: {
        margin: spacing(3,3)
      },
      reviewsLeft: {
        width: '100%',
        marginRight: 0
      },

      reviewsRight: {
        display: 'none',
      }
    }
  });
}