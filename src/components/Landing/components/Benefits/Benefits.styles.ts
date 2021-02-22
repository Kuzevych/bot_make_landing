import { createStyles, Theme } from "@material-ui/core/styles";

import { screenSize } from 'shared/constants/breakpoints';

export default function styles({ spacing, breakpoints }: Theme) {
  return createStyles({
    root: {
      padding: spacing(0, 40, 15, 40),

    },
    benefit: {
      marginTop: 0,

      '&:nth-child(even)': {
        flexDirection: 'row-reverse'
      }
    },
    [breakpoints.up(screenSize.xl)]: {
      root: {
        margin: 'auto',
        maxWidth: '60%',
        width: '60%',
        padding: 0
      },
    },
    [breakpoints.down(screenSize.lg)]: {
      root: {
        margin: spacing(0, 20),
        padding: spacing(4, 0, 0)
      },
    },
    [breakpoints.down(screenSize.md)]: {
      root: {
        margin: spacing(0, 10)
      },
      image: {
        transform: 'scale(.7)',
        width: '50%'
      }
    },
    [breakpoints.down(screenSize.sm)]: {
      root: {
        margin: spacing(1, 3)
      },
      benefit: {
        flexDirection: 'column',

        '&:nth-child(even)': {
          flexDirection: 'column'
        }
      },
      textContainer: {
        maxWidth: '90%'
      },
      image: {
        transform: 'scale(1)',
        width: '100%'
      }
    }

  });
}