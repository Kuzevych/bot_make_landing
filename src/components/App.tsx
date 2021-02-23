import * as React from "react";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { WithStyles, withStyles } from "@material-ui/styles";
import Landing from "./Landing";
import { colors } from 'shared/constants/colors';
import { Theme } from 'shared/types/theme';

import styles from './App.styles';

export interface AppProps extends WithStyles<typeof styles> {}

const App: React.FC<AppProps> = (props: AppProps) => {

  const primaryColor: string = React.useMemo(()=> {
    if (localStorage.getItem('theme') === Theme.Light) {
      return colors.lightGreen;
    }

    return colors.lightBlack;
  },[]);

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      primary: {
        main: primaryColor,
        light: colors.white
      },
    }
  });

  const { classes } = props;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing classes={{ root: classes.root }}/>
    </ThemeProvider>
  );
};

export default withStyles(styles)(App);