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
      padding: spacing(15, 40),
      textAlign: 'center'
    },
    enrolls: {
      marginTop: spacing(12)
    },
    enroll: {
      width: '24%',

      '&::before': {
        content: '""',
        position: 'relative',
        top: '30%',
        left: '80%',
        borderTop: `1px dashed ${colors.darkBlue}`,
        width: '118%',
        zIndex: 1
      },

      '&:last-of-type': {
        '&::before': {
          content: '""',
          position: 'relative',
          border: 'none',
        },
      }
    },
    image: {
      zIndex: 2
    },
    enrollText: {
      fontSize: 18
    },
    [breakpoints.up(screenSize.xl)]: {
      container: {
        margin: spacing(12, 'auto', ),
        maxWidth: '60%',
        width: '60%',
        padding: 0
      },
      image: {
        height: 180
      },
      enrollText: {
        fontSize: 21
      },
    },
    [breakpoints.down(screenSize.lg)]: {
      container: {
        margin: spacing(12, 20),
        padding: spacing(4, 0, 0)
      },
    },
    [breakpoints.down(screenSize.md)]: {
      container: {
        margin: spacing(4, 10)
      },
      enroll: {
        '&::before': {
          content: '""',
          position: 'absolute',
          border: 'none',
        },
        '&:last-of-type': {
          '&::before': {
            content: '""',
            position: 'absolute',
            border: 'none',
          },
        }
      },
      image: {
        margin: spacing(0, 4, 4, 0)
      }
    },
    [breakpoints.down(screenSize.sm)]: {
      container: {
        margin: spacing(3, 3)
      },
      enrolls: {
        flexDirection: 'column'
      },
      enroll: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 'auto'
      },
      image: {
        height: 80
      }
    }
  });
}