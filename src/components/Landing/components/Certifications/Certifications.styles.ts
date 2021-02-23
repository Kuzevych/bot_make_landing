import { createStyles, Theme } from '@material-ui/core/styles';

import { colors } from 'shared/constants/colors';
import { screenSize } from 'shared/constants/breakpoints';

export default function styles({ spacing, breakpoints }: Theme) {
  return createStyles({
    root: {
      padding: spacing(15, 40)
    },
    certifications: {
      marginTop: spacing(16)
    },
    certification: {
      width: '40%'
    },
    button: {
      color: colors.white,
      backgroundColor: colors.blue,
      width: 140,
      maxWidth: '100%',
      marginTop: spacing(8)
    },
    secondHeader: {
      marginTop: spacing(16)
    },
    badgeBlock: {
      width: '100%'
    },
    badgeText: {
      fontWeight: 250,
      fontSize: 23,
    },
    badgeImage: {},
    advantage: {
      width: '30%'
    },
    [breakpoints.up(screenSize.xl)]: {
      root: {
        margin: spacing(12, 'auto', 12),
        maxWidth: '60%',
        width: '60%',
        padding: 0
      }
    },
    [breakpoints.down(screenSize.lg)]: {
      root: {
        margin: spacing(12, 20),
        padding: spacing(4, 0, 0)
      }
    },
    [breakpoints.down(screenSize.md)]: {
      root: {
        margin: spacing(4, 10)
      },
      badgeText: {
        display: 'none'
      },
      badgeImage: {
        width: '100%'
      }
    },
    [breakpoints.down(screenSize.sm)]: {
      root: {
        margin: spacing(3, 3)
      },
      certifications: {
        flexDirection: 'column',
      },
      certification: {
        width: 'auto'
      },
      button: {
        width: '100%'
      },
      advantageBlock: {
        flexDirection: 'column'
      },
      advantage: {
        width: '100%'
      },
    }
  });
}