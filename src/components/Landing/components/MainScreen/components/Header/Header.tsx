import * as React from 'react';
import { Box, FormControlLabel, Switch, withStyles, WithStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from 'shared/icons/Logo';
import SearchInput from './components/SearchInput';
import NavMenu from './components/NavMenu';
import { Theme } from 'shared/types/theme';

import styles from './Header.styles';

export interface HeaderProps extends WithStyles<typeof styles> {
  onToggle?: (theme: Theme) => void
}

const Header = (props: HeaderProps) => {
  let [checked, setChecked] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (checked) {
      localStorage.setItem('theme', Theme[Theme.Light]);
      props.onToggle(Theme.Light);
    } else {
      localStorage.setItem('theme', Theme[Theme.Dark]);
      props.onToggle(Theme.Dark);
    }
  };

  React.useEffect(()=>{
    if( localStorage.getItem('theme') && localStorage.getItem('theme') === Theme[Theme.Light]) {
      setChecked(false);
      return;
    }

    setChecked(true);
  },[]);

  const { classes } = props;

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" className={classes.root}>
      <Box display="flex" flexDirection="row">
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
            name="checkbox"
            color="primary"
          />
        }
        label={checked ? Theme[Theme.Dark] : Theme[Theme.Light]}
        classes={{ label: classes.label }}
      />
    </Box>
  );
};

export default withStyles(styles)(Header);