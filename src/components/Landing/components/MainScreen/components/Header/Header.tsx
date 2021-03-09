import * as React from 'react';
import { Box, FormControlLabel, Switch, withStyles, WithStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from 'shared/icons/Logo';
import SearchInput from './components/SearchInput';
import NavMenu from './components/NavMenu';
import { Theme } from 'shared/types/theme';

import styles from './Header.styles';

export interface HeaderProps extends WithStyles<typeof styles> {
  theme: Theme | string;
  onToggle?: (theme: Theme) => void
}

const Header = ({ theme, onToggle, classes }: HeaderProps) => {
  let [checked, setChecked] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (checked) {
      onToggle(Theme.Light);
    } else {
      onToggle(Theme.Dark);
    }
  };

  React.useEffect(()=>{
    if (theme === Theme.Light) {
      setChecked(false);
      return;
    }

    setChecked(true);
  },[]);

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
        label={checked ? Theme.Dark : Theme.Light}
        classes={{ label: classes.label }}
      />
    </Box>
  );
};

export default withStyles(styles)(Header);