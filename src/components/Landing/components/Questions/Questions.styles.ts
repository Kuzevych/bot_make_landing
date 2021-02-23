import { createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { screenSize } from 'shared/constants/breakpoints';

export default function styles({ spacing, breakpoints }: Theme) {
  return createStyles({
    root: {
      padding: spacing(15, 45),
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
      }
    },
    [breakpoints.down(screenSize.sm)]: {
      root: {
        margin: spacing(3, 3)
      },
      heading: {
        fontSize: 24
      },
      description: {
        fontSize: 11
      }
    }
  });
}