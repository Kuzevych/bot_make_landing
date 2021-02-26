import * as React from "react";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { WithStyles, withStyles } from "@material-ui/styles";

import Landing from "./Landing";
import { colors } from 'shared/constants/colors';
import { Theme } from 'shared/types/theme';
import { GlobalContext } from 'context/context';


import styles from './App.styles';

export interface AppProps extends WithStyles<typeof styles> {}

const App: React.FC<AppProps> = (props: AppProps) => {

  let [state, setState] = React.useState({
    theme: Theme.Dark
  });


  React.useEffect(()=> {
    if (localStorage.getItem('theme') === Theme[Theme.Light]) {
      setState({ theme: Theme.Light });

    } else {
      setState({ theme: Theme.Dark });
    }
  },[]);

  const primaryColor: string = React.useMemo(() => {
    if (localStorage.getItem('theme') && localStorage.getItem('theme') === Theme.Light) {
      return colors.lightGreen;
    }

    return colors.lightBlack;
  }, [state.theme]);

  const toggleTheme = (theme: Theme) => {
    setState({
      ...state,
      theme: theme
    });

    localStorage.setItem('theme', theme);
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
    <GlobalContext.Provider value={{
      theme: state.theme,
      toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Landing classes={{ root: classes.root }}/>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default withStyles(styles)(App);