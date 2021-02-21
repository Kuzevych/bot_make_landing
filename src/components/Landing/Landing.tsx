import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import MainScreen from './components/MainScreen';
import Programs from './components/Programs';
import Benefits from './components/Benefits';
import Enroll from './components/Enroll';
import Certifications from './components/Certifications';
import Reviews from './components/Reviews';

import styles from './Landing.styles';
import Faqs from './components/Faqs';

export interface LandingProps extends WithStyles<typeof styles> {}

const Landing = (props: LandingProps) => {

  const { classes } = props;

  return (
    <Box display="flex" flexDirection="column" className={classes.root}>
      <MainScreen />
      <Programs
        title="Choose your program"
      />
      <Benefits />
      <Enroll />
      <Certifications/>
      <Reviews />
      <Programs
        title="Ready to start?"
      />
      <Faqs />
    </Box>
  );
};

export default withStyles(styles)(Landing);