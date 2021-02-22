import { createStyles, Theme } from '@material-ui/core/styles';

import { colors } from "shared/constants/colors";
import { screenSize } from 'shared/constants/breakpoints';

const styles = ({ spacing, breakpoints }: Theme) => {
  return createStyles({
    root: {
      height: '100vh',
      background: `linear-gradient(to right, ${colors.lightBlack},  ${colors.lightBlue})`,
      color: 'white'
    },
    container: {
      margin: spacing(0, 40),
      height: '100%'
    },
    [breakpoints.up(screenSize.xl)]: {
      container: {
        margin: 'auto',
        maxWidth: '60%'
      },
    },
    [breakpoints.down(screenSize.lg)]: {
      container: {
        margin: spacing(0, 20)
      },
    },
    [breakpoints.down(screenSize.md)]: {
      root: {},
      container: {
        margin: spacing(0,10)
      },
      navMenu: {
        display: 'none'
      },
      menuIcon: {
        display: 'inline-block'
      },
      image: {
        transform: 'scale(.7)'
      },
      title: {
        fontSize: 28
      },
      text: {
        fontSize: 14
      }
    },
    [breakpoints.down(screenSize.sm)]: {
      root: {
        height: 'auto'
      },
      container: {
        margin: spacing(0, 3),
      },
      mainScreen: {
        flexDirection: 'column-reverse',
        alignItems: 'center',
      },
      mainContentText: {
        alignItems: 'center',
        textAlign: 'center',
        width: '100%'
      },
      image: {
        transform: 'scale(.9)'
      },
      bottomSection: {
        flexDirection: 'column',
        alignItems: 'center'
      },
      benefits: {
        padding: spacing(4,7),
        width: '100%',
        marginTop: spacing(2),

        '&:first-of-type': {
          paddingLeft: spacing(7)
        },
        border: 'none',
      },
      benefitTitle: {
        fontSize: 16
      },
      benefitText: {
        fontSize: 12
      },
      startButton: {
        width: '90%'
      }
    }
  });
};

export default styles;