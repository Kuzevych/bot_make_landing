import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { WithStyles, withStyles } from "@material-ui/styles";

import styles from './ArrowUp.styles';

interface ArrowUpIconProps extends WithStyles<typeof styles> { }

function ArrowUpIcon ({ classes }: ArrowUpIconProps): React.ReactElement {
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" classes={{ root: classes.root }}>
      <path d="M10 17V3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 10L10 3L17 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SvgIcon>
  );
}

export default withStyles(styles)(ArrowUpIcon);