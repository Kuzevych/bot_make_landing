import * as React from 'react';
import { WithStyles, withStyles } from "@material-ui/core/styles";

import styles from "./Enroll.styles";

export interface EnrollProps extends WithStyles<typeof styles> {}

function Enroll({ classes }: EnrollProps): React.ReactElement {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h2>How to enroll</h2>
      </div>
    </div>
  );
}

export default withStyles(styles)(Enroll);