import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import MainScreen from './components/MainScreen';
import Programs from './components/Programs';
import Benefits from './components/Benefits';
import Enroll from './components/Enroll';
import Certifications from './components/Certifications';
import Reviews from './components/Reviews';

import styles from './Landing.styles';
import Faqs from './components/Questions';

export interface LandingProps extends WithStyles<typeof styles> {}

const Landing = (props: LandingProps) => {

  const { classes } = props;

  // <script>
  //   window.fbAsyncInit = function() {
  //   FB.init({
  //     appId      : '{your-app-id}',
  //     cookie     : true,
  //     xfbml      : true,
  //     version    : '{api-version}'
  //   });
  //
  //   FB.AppEvents.logPageView();
  //
  // };
  //
  //   (function(d, s, id){
  //   var js, fjs = d.getElementsByTagName(s)[0];
  //   if (d.getElementById(id)) {return;}
  //   js = d.createElement(s); js.id = id;
  //   js.src = "https://connect.facebook.net/en_US/sdk.js";
  //   fjs.parentNode.insertBefore(js, fjs);
  // }(document, 'script', 'facebook-jssdk'));
  // </script>

  // FB.getLoginStatus(function(response) {
  //   statusChangeCallback(response);
  // });


  // {
  //   status: 'connected',
  //     authResponse: {
  //   accessToken: '...',
  //     expiresIn:'...',
  //     signedRequest:'...',
  //     userID:'...'
  // }
  // }


  // <fb:login-button
  //   scope="public_profile,email"
  //   onlogin="checkLoginState();">
  // </fb:login-button>


  // function checkLoginState() {
  //   FB.getLoginStatus(function(response) {
  //     statusChangeCallback(response);
  //   });
  // }

  //TODO Facebook login logic

  return (
    <Box display="flex" flexDirection="column" className={classes.root}>
      <MainScreen />
      <Programs
        title="Choose your program"
      />
      <Benefits />
      <Enroll />
      <Certifications/>
      <Reviews />
      <Programs
        title="Ready to start?"
      />
      <Faqs />
    </Box>
  );
};

export default withStyles(styles)(Landing);