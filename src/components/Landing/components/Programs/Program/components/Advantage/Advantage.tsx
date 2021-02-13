import * as React from 'react';
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import MarkIcon from "shared/icons/Mark";
import { Button } from "@material-ui/core";

import styles from './Advantage.styles';

export interface AdvantageI {
  value: string;
  label?: boolean;
  addInfo?: boolean;
}

export interface AdvantageProps extends WithStyles<typeof styles>, AdvantageI {}

function Advantage ({ value, addInfo, label, classes }: AdvantageProps): React.ReactElement {
  return(
    <Box display="flex" alignItems="flex-start" className={classes.root}>
      <MarkIcon classes={{ root: classes.icon }} />
      <span>
        <span className={classes.value}>{value}</span>
        {addInfo && <Button variant="outlined" color="primary" size="small" classes={{ root: classes.button }}> Learn more </Button>}
        {label && <span className={classes.label}> (coming soon)</span>}
      </span>
    </Box>
  );
}

export default withStyles(styles)(Advantage);