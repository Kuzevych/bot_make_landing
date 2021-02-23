import { createStyles, Theme } from '@material-ui/core/styles';

import { colors } from 'shared/constants/colors';
import { screenSize } from 'shared/constants/breakpoints';

export default function styles({ spacing, breakpoints, palette: { primary } }: Theme) {
  return createStyles({
    root: {
      background: `linear-gradient(to right, ${primary.main},  ${colors.lightBlue})`,
      color: colors.white
    },
    container: {
      padding: spacing(15, 40, 8),
    },
    logoBlock: {
      maxWidth: 250,
      marginRight: spacing(12)
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
      cursor: 'pointer'
    },
    linksBlock: {
      width: '100%',
      marginLeft: spacing(4)
    },
    [breakpoints.up(screenSize.xl)]: {
      container: {
        margin: spacing(12, 'auto', 12),
        maxWidth: '60%',
        width: '60%',
        padding: 0
      }
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
      joinBlock: {
        display: 'none'
      }
    },
    [breakpoints.down(screenSize.sm)]: {
      container: {
        margin: spacing(3, 3)
      },
      main: {
        flexDirection: 'column',
        alignItems: 'center'
      },
      logoBlock: {
        width: '70%',
        maxWidth: '70%',
        marginRight: 0
      },
      linksBlock: {
        width: '100%',
        justifyContent: 'space-around',
        margin: spacing(4, 0)
      }
    }
  });
}