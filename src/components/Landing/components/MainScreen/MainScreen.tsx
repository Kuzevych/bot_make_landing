import * as React from 'react';
import { Box } from "@material-ui/core";
import { WithStyles, withStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import MainContent from "./components/MainContent";
import BottomContent from "./components/BottomContent";
import { Theme } from 'shared/types/theme';
import { ThemeContext } from 'context/theme';

import styles from './MainScreen.styles';

export interface MainScreenProps extends WithStyles<typeof styles> {
  theme?: Theme
}

const MainScreen = (props: MainScreenProps) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Box display="flex" flexDirection="column" justifyContent="space-between" className={classes.container}>
        <ThemeContext.Consumer>
          {(context) =>
            <Header classes={{
              navMenu: classes.navMenu,
              menuIcon: classes.menuIcon
            }}
            onToggle={context.toggleTheme}
            theme={context.theme}
            />
          }
        </ThemeContext.Consumer>
        <MainContent classes={{
          root: classes.mainScreen,
          textBlock: classes.mainContentText,
          image: classes.image,
          title: classes.title,
          text: classes.text,
          startButton: classes.startButton
        }}/>
        <BottomContent classes={{
          root: classes.bottomSection,
          benefits: classes.benefits,
          benefitTitle: classes.benefitTitle,
          benefitText: classes.benefitText
        }}
        />
      </Box>
    </div>
  );
};

export default withStyles(styles)(MainScreen);