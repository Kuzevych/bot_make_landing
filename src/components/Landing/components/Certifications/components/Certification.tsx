import * as React from 'react';
import { withStyles, WithStyles } from "@material-ui/core/styles";

import styles from './Certification.styles';
import Box from '@material-ui/core/Box';

export interface Item {
  title: string;
  description: string;
  image: any;
}

export interface CertificationProps extends WithStyles<typeof styles>, Item {}

const Certification = ({ classes, title, description, image }: CertificationProps) => {
  return(
    <Box display="flex" flexDirection="row" alignItems="flex-start" className={classes.root}>
      <img src={image} alt="image" className={classes.image}/>
      <Box display="flex" flexDirection="column">
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
      </Box>
    </Box>
  );
};

export default withStyles(styles)(Certification);