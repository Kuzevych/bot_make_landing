import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import { Question } from '../Faqs';

import styles from './Faq.styles';

export interface FaqProps extends WithStyles<typeof styles>, Question {}

const Faq = ({ classes, question, answer }: FaqProps) => {
  return(
    <div className={classes.root}>
      <h2 className={classes.heading}>{question}</h2>
      <p className={classes.description} dangerouslySetInnerHTML={{ __html: String(answer) }} />
    </div>
  );
};

export default withStyles(styles)(Faq);