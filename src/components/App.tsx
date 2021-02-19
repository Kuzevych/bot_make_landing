import * as React from "react";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { WithStyles, withStyles } from "@material-ui/styles";
import Landing from "./Landing";

import styles from './App.styles';

export interface AppProps extends WithStyles<typeof styles> {}

const App: React.FC<AppProps> = (props: AppProps) => {

  const theme = createMuiTheme({ spacing: 4 });

  const { classes } = props;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing classes={{ root: classes.root }}/>
    </ThemeProvider>
  );
};

export default withStyles(styles)(App);