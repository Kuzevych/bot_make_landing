import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

import styles from './Benefit.styles';

export interface BenefitProps extends WithStyles<typeof styles> {
  title: string;
  description: string;
  image: any;
}

const Benefit = ({ classes, title, description, image }:BenefitProps ) => {
  return(
    <Box display="flex" className={classes.root} justifyContent="space-between" alignItems="center">
      <div className={classes.textContainer}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.description}>{description}</p>
      </div>
      <img src={image} alt="image" className={classes.image} />
    </Box>
  );
};

export default withStyles(styles)(Benefit);
