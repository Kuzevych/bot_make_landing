import * as React from 'react';
import { Box, withStyles, WithStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from 'shared/icons/Logo';
import SearchInput from './components/SearchInput';
import NavMenu from './components/NavMenu';

import styles from './Header.styles';

export interface HeaderProps extends WithStyles<typeof styles> {
}

const Header = ( props: HeaderProps ) => {
  const { classes } = props;

  return(
    <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" className={classes.root}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Logo />
        <h3 className={classes.logoText}>botmakers</h3>
      </Box>
      <SearchInput />
      <NavMenu classes={{ root: classes.navMenu }}/>
      <MenuIcon classes={{ root: classes.menuIcon }} />
    </Box>
  );
};

export default withStyles(styles)(Header);