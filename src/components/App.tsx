import * as React from "react";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { WithStyles, withStyles } from "@material-ui/styles";

import Landing from "./Landing";
import { colors } from 'shared/constants/colors';
import { Theme } from 'shared/types/theme';

import styles from './App.styles';
import { GlobalContext } from "store/store";

export interface AppProps extends WithStyles<typeof styles> {}

const App: React.FC<AppProps> = (props: AppProps) => {

  let [state, setState] = React.useState({
    theme: Theme.Dark
  });

  const primaryColor: string = React.useMemo(() => {
    if (localStorage.getItem('theme') === Theme.Light) {
      return colors.lightGreen;
    }

    return colors.lightBlack;
  }, [state.theme]);

  const toggleTheme = () => {
    setState({
      ...state,
      theme: state.theme === Theme.Light ? Theme.Dark : Theme.Light
    });
  };

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
    <GlobalContext.Provider value={{ state, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Landing classes={{ root: classes.root }}/>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default withStyles(styles)(App);