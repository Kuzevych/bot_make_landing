import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { WithStyles, withStyles } from "@material-ui/styles";

import styles from './Cube.styles';

interface CubeIconProps extends WithStyles<typeof styles> { }

function CubeIcon ({ classes }: CubeIconProps): React.ReactElement{
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" classes={{ root: classes.root }}>
      <path d="M17.5 13.3333V6.66666C17.4997 6.37439 17.4225 6.08733 17.2763 5.83429C17.13 5.58125 16.9198 5.37113 16.6667 5.22499L10.8333 1.89166C10.58 1.74538 10.2926 1.66837 10 1.66837C9.70744 1.66837 9.42003 1.74538 9.16667 1.89166L3.33333 5.22499C3.08022 5.37113 2.86998 5.58125 2.72372 5.83429C2.57745 6.08733 2.5003 6.37439 2.5 6.66666V13.3333C2.5003 13.6256 2.57745 13.9126 2.72372 14.1657C2.86998 14.4187 3.08022 14.6289 3.33333 14.775L9.16667 18.1083C9.42003 18.2546 9.70744 18.3316 10 18.3316C10.2926 18.3316 10.58 18.2546 10.8333 18.1083L16.6667 14.775C16.9198 14.6289 17.13 14.4187 17.2763 14.1657C17.4225 13.9126 17.4997 13.6256 17.5 13.3333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.72461 5.80002L9.99961 10.0084L17.2746 5.80002" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 18.4V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SvgIcon>
  );
}

export default withStyles(styles)(CubeIcon);