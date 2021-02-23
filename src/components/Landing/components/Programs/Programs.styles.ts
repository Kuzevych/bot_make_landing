import { createStyles, Theme } from "@material-ui/core/styles";

import { screenSize } from 'shared/constants/breakpoints';

export default function styles({ spacing, breakpoints }: Theme) {
  return createStyles({
    root: {
      padding: spacing(15, 40),
    },
    programs: {
      marginTop: spacing(12)
    },
    program: {
      marginRight: spacing(4),

      '&:last-of-type': {
        marginRight: 0
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
    },
    [breakpoints.down(screenSize.sm)]: {
      root: {
        margin: spacing(3, 3)
      },
      programs: {
        flexDirection: 'column'
      },
      program: {
        margin: spacing(2, 0, 2)
      },
      programTitle: {
        justifyContent: 'center'
      }
    }
  });
}