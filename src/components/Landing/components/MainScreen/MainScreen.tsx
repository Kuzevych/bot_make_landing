import * as React from 'react';
import { Box } from "@material-ui/core";
import { WithStyles, withStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import MainContent from "./components/MainContent";
import BottomContent from "./components/BottomContent";
import { Theme } from 'shared/types/theme';

import styles from './MainScreen.styles';
import { GlobalContext } from 'store';

export interface MainScreenProps extends WithStyles<typeof styles> {
  theme?: Theme
}

const MainScreen = (props: MainScreenProps) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GlobalContext.Consumer>
        {(context) =>
          <Box display="flex" flexDirection="column" justifyContent="space-between" className={classes.container}>
            <Header classes={{
              navMenu: classes.navMenu,
              menuIcon: classes.menuIcon
            }}
            onToggle={context.toggleTheme}
            />
            <MainContent classes={{
              root: classes.mainScreen,
              textBlock: classes.mainContentText,
              image: classes.image,
              title: classes.title,
              text: classes.text,
              startButton: classes.startButton
            }} />
            <BottomContent classes={{
              root: classes.bottomSection,
              benefits: classes.benefits,
              benefitTitle: classes.benefitTitle,
              benefitText: classes.benefitText
            }}
            />
          </Box>
        }
      </GlobalContext.Consumer>
    </div>
  );
};

export default withStyles(styles)(MainScreen);