import * as React from 'react';
import { Box } from "@material-ui/core";
import { WithStyles, withStyles } from '@material-ui/core/styles';

import Header from './components/Header';

import styles from './MainScreen.styles';

export interface MainScreenProps extends WithStyles<typeof styles> {
}

const MainScreen = (props: MainScreenProps) => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <Box display="flex" flexDirection="column" justifyContent="space-between" className={classes.container}>
        <Header />
        <p>Main</p>
        <p>Bottom</p>
      </Box>
    </div>
  );
};

export default withStyles(styles)(MainScreen);