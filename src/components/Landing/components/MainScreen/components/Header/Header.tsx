import * as React from 'react';
import { Box, withStyles, WithStyles } from "@material-ui/core";
import Logo from 'shared/icons/Logo';
import SearchInput from "./components/SearchInput";
import NavMenu from './components/NavMenu';

import styles from './Header.styles';

export interface HeaderProps extends WithStyles<typeof styles> {
}

function Header ( props: HeaderProps ) {
  const { classes } = props;

  return(
    <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center" className={classes.root}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Logo />
        <h3 className={classes.logoText}>botmakers</h3>
      </Box>
      <SearchInput />
      <NavMenu />
    </Box>
  );
}

export default withStyles(styles)(Header);