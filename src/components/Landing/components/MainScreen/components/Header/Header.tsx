import * as React from 'react';
import { Box, withStyles, WithStyles, FormControlLabel, Switch } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from 'shared/icons/Logo';
import SearchInput from './components/SearchInput';
import NavMenu from './components/NavMenu';
import { Theme } from 'shared/types/theme';

import styles from './Header.styles';

export interface HeaderProps extends WithStyles<typeof styles> {
}

const Header = (props: HeaderProps) => {
  let [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('theme') === Theme.Dark) {
      setChecked(true);
    }
  }, []);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  React.useEffect(() => {
    if (checked) {
      localStorage.setItem('theme', Theme.Dark);
    } else {
      localStorage.setItem('theme', Theme.Light);
    }
  }, [checked]);

  const { classes } = props;

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" className={classes.root}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Logo/>
        <h3 className={classes.logoText}>botmakers</h3>
      </Box>
      <SearchInput/>
      <NavMenu classes={{ root: classes.navMenu }}/>
      <MenuIcon classes={{ root: classes.menuIcon }}/>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label={checked ? Theme.Dark : Theme.Light}
      />
    </Box>
  );
};

export default withStyles(styles)(Header);