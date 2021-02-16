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

  let [isAuth, setAuth] = React.useState(false);

  React.useEffect(()=> {
    // @ts-ignore
    let oauth = window.gapi;

    oauth?.load('auth2',()=>{
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

  const signIn = () => {
    // @ts-ignore
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser: any) => {

      const profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId());
      console.log('Full Name: ' + profile.getName());
      console.log('Given Name: ' + profile.getGivenName());
      console.log('Family Name: ' + profile.getFamilyName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());

      const id_token = googleUser.getAuthResponse().id_token;
      console.log('ID Token: ' + id_token);

      setAuth(true);
    });
  };

  const signOut = () => {

    // @ts-ignore
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log('User signed out.');
      setAuth(false);
    });

  };

  const { classes } = props;

  return (
    <div className={classes.root}>
      <Box display="flex" flexDirection="column" justifyContent="space-between" className={classes.container}>
        <Header />
        <MainContent
          isAuth={isAuth}
          onLogin={signIn}
          onLogout={signOut}
        />
        <BottomContent />
      </Box>
    </div>
  );
};

export default withStyles(styles)(MainScreen);