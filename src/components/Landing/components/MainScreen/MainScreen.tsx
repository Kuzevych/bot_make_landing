import * as React from 'react';
import { Box } from "@material-ui/core";
import { WithStyles, withStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import MainContent from "./components/MainContent";
import BottomContent from "./components/BottomContent";

import styles from './MainScreen.styles';

export interface MainScreenProps extends WithStyles<typeof styles> {
}

const MainScreen = (props: MainScreenProps) => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <Box display="flex" flexDirection="column" justifyContent="space-between" className={classes.container}>
        <Header />
        <MainContent />
        <BottomContent />
      </Box>
    </div>
  );
};

export default withStyles(styles)(MainScreen);