import * as React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { WithStyles, withStyles } from "@material-ui/styles";

import Landing from "./Landing";

import styles from './App.styles';

export interface AppProps extends WithStyles<typeof styles> {}

const App: React.FC<AppProps> = (props: AppProps) => {

  // React.useEffect(()=> {
  //   // @ts-ignore
  //   let oauth = window.gapi;
  //
  //   oauth.load('auth2',()=>{
  //     oauth.auth2
  //       .init({
  //         client_id:
  //         process.env.GOOGLE_CLIENT_ID,
  //       })
  //       .then(onInit, onError);
  //   });
  // },[]);
  //
  // const onInit = (auth: any) => {
  //   console.log('init OK', auth);
  // };
  // const onError = (err: any) => {
  //   console.log('error', err);
  // };
  //
  // const signIn = () => {
  //   // @ts-ignore
  //   const auth2 = window.gapi.auth2.getAuthInstance();
  //   auth2.signIn().then((googleUser: any) => {
  //
  //     const profile = googleUser.getBasicProfile();
  //     console.log('ID: ' + profile.getId());
  //     console.log('Full Name: ' + profile.getName());
  //     console.log('Given Name: ' + profile.getGivenName());
  //     console.log('Family Name: ' + profile.getFamilyName());
  //     console.log('Image URL: ' + profile.getImageUrl());
  //     console.log('Email: ' + profile.getEmail());
  //
  //     const id_token = googleUser.getAuthResponse().id_token;
  //     console.log('ID Token: ' + id_token);
  //   });
  // };
  //
  // const signOut = () => {
  //
  //   // @ts-ignore
  //   const auth2 = window.gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(function() {
  //     console.log('User signed out.');
  //   });
  // };

  const theme = createMuiTheme({ spacing: 4 });

  const { classes } = props;
  return (
    <ThemeProvider theme={theme}>
      {/*<Button variant="outlined" onClick={signIn}>Login</Button>*/}
      {/*<Button variant="contained" onClick={signOut}>LogOut</Button>*/}
      <Landing classes={{ root: classes.root }}/>
    </ThemeProvider>
  );
};

export default withStyles(styles)(App);