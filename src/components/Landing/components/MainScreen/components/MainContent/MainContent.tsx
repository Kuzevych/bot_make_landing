import * as React from 'react';
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";

// @ts-ignore
import bot from 'shared/images/bot.png';

import styles from "./MainContent.styles";

export interface MainContentProps extends WithStyles<typeof styles> {}

function MainContent({ classes }: MainContentProps): React.ReactElement {
  return(
    <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" className={classes.root}>
      <Box display="flex" flexDirection="column" className={classes.textBlock}>
        <h1 className={classes.title}>Pass the Botmakers certification program </h1>
        <h3 className={classes.text}>Realize full potential of your marketing agency</h3>
        <Button variant="contained" color="primary" className={classes.startButton}>get started</Button>
      </Box>
      <img src={bot} alt="" className={classes.image} />
    </Box>
  );
}

export default withStyles(styles)(MainContent);