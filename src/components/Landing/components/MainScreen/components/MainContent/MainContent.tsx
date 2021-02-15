import * as React from 'react';
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { Box, Button, Dialog, DialogTitle } from "@material-ui/core";

import bot from 'shared/images/bot.png';

import styles from "./MainContent.styles";

export interface MainContentProps extends WithStyles<typeof styles> {}

const MainContent = ({ classes }: MainContentProps) => {
  let [open, setOpen] = React.useState(false);

  const handleOpen = React.useCallback(()=> setOpen(true),[]);
  const handleClose = React.useCallback(()=> setOpen(false),[]);

  return(
    <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" className={classes.root}>
      <Box display="flex" flexDirection="column" className={classes.textBlock}>
        <h1 className={classes.title}>Pass the Botmakers certification program </h1>
        <h3 className={classes.text}>Realize full potential of your marketing agency</h3>
        <Button
          variant="contained"
          color="primary"
          className={classes.startButton}
          onClick={handleOpen}
        >get started</Button>
      </Box>
      <img src={bot} alt="" className={classes.image} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="simple-dialog-title">Dialog</DialogTitle>
      </Dialog>
    </Box>
  );
};

export default withStyles(styles)(MainContent);