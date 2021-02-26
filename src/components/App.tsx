import * as React from "react";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import { WithStyles, withStyles } from "@material-ui/styles";

import Landing from "./Landing";
import { colors } from 'shared/constants/colors';
import { Theme } from 'shared/types/theme';
import { ThemeContext } from 'context/theme';


import styles from './App.styles';

export interface AppProps extends WithStyles<typeof styles> {}

const App: React.FC<AppProps> = (props: AppProps) => {

  let [state, setState] = React.useState({
    theme: localStorage.getItem('theme') || Theme.Light,
  });


  React.useEffect(()=> {
    if (localStorage.getItem('theme')) {
      setState({ theme: localStorage.getItem('theme') });
    }
  },[]);

  const primaryColor: string = React.useMemo(() => {
    if (localStorage.getItem('theme') && localStorage.getItem('theme') === Theme.Dark) {
      return colors.lightBlack;
    }

    return colors.lightGreen;
  }, [state.theme]);

  const toggleTheme = (theme: Theme) => {
    setState({
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
    <ThemeContext.Provider value={{
      theme: state.theme,
      toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Landing classes={{ root: classes.root }}/>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default withStyles(styles)(App);