import * as React from 'react';
import { WithStyles } from "@material-ui/core";
import Box from '@material-ui/core/Box';

import styles from './HeaderSection.styles';
import { withStyles } from "@material-ui/core/styles";

export interface HeaderSectionProps extends WithStyles<typeof styles> {
  title: string;
  description?: string;
}

const HeaderSection = ({ title, description, classes }: HeaderSectionProps) => {
  return(
    <Box display="flex" flexDirection="column" alignItems="center">
      <h2 className={classes.title}>{title}</h2>
      { description && <span className={classes.description} dangerouslySetInnerHTML={{ __html: String(description) }}/> }
    </Box>
  );
};

export default withStyles(styles)(HeaderSection);