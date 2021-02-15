import * as React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { WithStyles, withStyles } from "@material-ui/styles";

import Landing from "./Landing";

import styles from './App.styles';

export interface AppProps extends WithStyles<typeof styles> {}

const App: React.FC<AppProps> = (props: AppProps) => {

  React.useEffect(()=> {

    // @ts-ignore
    let oauth = window.gapi;

    oauth.load('auth2',()=>{
      oauth.auth2
        .init({
          client_id:
          process.env.GOOGLE_CLIENT_ID,
        })
        .then(onInit, onError);
    });
  },[]);

  const onInit = (auth: any) => {
    console.log('init OK', auth);
  };
  const onError = (err: any) => {
    console.log('error', err);
  };

  const theme = createMuiTheme({ spacing: 4 });

  const { classes } = props;
  return (
    <ThemeProvider theme={theme}>
      <Landing classes={{ root: classes.root }}/>
    </ThemeProvider>
  );
};

export default withStyles(styles)(App);