import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import { FooterLinks } from '../Footer';

import styles from './FooterSection.styles';


export interface FooterSectionProps extends WithStyles <typeof styles>, FooterLinks {}

const FooterSection = ({ classes, sectionTitle, links }: FooterSectionProps) => {
  return(
    <Box display="flex" flexDirection="column" className={classes.root}>
      <h3 className={classes.title}>{sectionTitle}</h3>
      {links.map((to) =>
        <a href={to.link} key={to.text} className={classes.link}>{to.text}</a>
      )}
    </Box>
  );
};

export default withStyles(styles)(FooterSection);