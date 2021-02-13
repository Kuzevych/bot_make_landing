import * as React from 'react';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";

import Advantage from "./components/Advantage";

import styles from './Program.styles';

export interface ProgramProps extends WithStyles<typeof styles> {
  price?: number;
  title?: string;
  description?: string;
  advantage?: any[];
  onSubmit?: (price?: number, chats?: number) => any;
}

function Program ({ classes, price, title, description, advantage, onSubmit }: ProgramProps): React.ReactElement {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between" className={classes.root}>
      <div className={classes.topContainer}>
        <span className={classes.titleContainer}>
          <h4 className={classes.currency}><sup>$</sup></h4>
          <h2>{price}</h2>
          <h4 className={classes.period}><sub>/year</sub></h4>
        </span>
        <h2 className={classes.subtitle}>{title}</h2>
        <p className={classes.forWhom}>{description}</p>
        {
          advantage.map((advantage) =>
            <Advantage
              key={Math.random()}
              {...advantage}
            />
          )
        }
      </div>

      <div>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          classes={{ root: classes.btn }}
          onClick={() => onSubmit(price, 2)}
        >
          Get Started
        </Button>
      </div>
    </Box>
  );
}

export default withStyles(styles)(Program);
