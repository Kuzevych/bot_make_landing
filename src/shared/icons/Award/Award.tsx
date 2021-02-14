import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { WithStyles, withStyles } from "@material-ui/styles";

import styles from './Awards.styles';

interface AwardIconProps extends WithStyles<typeof styles> { }

function AwardIcon({ classes }: AwardIconProps): React.ReactElement {
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none" classes={{ root: classes.root }}>
      <path d="M8.50033 11.6249C11.2387 11.6249 13.4587 9.405 13.4587 6.66659C13.4587 3.92817 11.2387 1.70825 8.50033 1.70825C5.76191 1.70825 3.54199 3.92817 3.54199 6.66659C3.54199 9.405 5.76191 11.6249 8.50033 11.6249Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.81509 10.8389L4.95801 17.2918L8.49967 15.1668L12.0413 17.2918L11.1843 10.8318" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SvgIcon>
  );
}

export default withStyles(styles)(AwardIcon);