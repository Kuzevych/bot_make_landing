import * as React from 'react';
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";

import bot from 'shared/images/bot.png';

import styles from "./MainContent.styles";

export interface MainContentProps extends WithStyles<typeof styles> {
  isAuth: boolean;
  onLogin: () => any;
  onLogout: () => any;
}


const MainContent = ({ classes, onLogin, onLogout, isAuth }: MainContentProps) => {

  const authConfig = () => {
    const config = [
      {
        isAuth: isAuth,
        buttonText: 'Logout',
        action: onLogout
      },
      {
        isAuth: !isAuth,
        buttonText: 'Login',
        action: onLogin
      },
    ];

    return config.find((config) => config.isAuth);
  };

  return(
    <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" className={classes.root}>
      <Box display="flex" flexDirection="column" className={classes.textBlock}>
        <h1 className={classes.title}>Pass the Botmakers certification program </h1>
        <h3 className={classes.text}>Realize full potential of your marketing agency</h3>
        <Button
          variant="contained"
          color="primary"
          className={classes.startButton}
          onClick={authConfig()?.action}
        >{authConfig()?.buttonText}</Button>
      </Box>
      <img src={bot} alt="" className={classes.image} />
    </Box>
  );
};

export default withStyles(styles)(MainContent);