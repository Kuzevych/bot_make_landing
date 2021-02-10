import * as React from 'react';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Box, Popover } from "@material-ui/core";
import cx from 'classnames';

import styles from './NavMenu.styles';

export interface NavMenuProps extends WithStyles {
}

export interface config {
  text: string;
  component?: React.ReactNode;
}

function NavMenu ({ classes }: NavMenuProps): React.ReactElement {
  const [anchorEl, setAnchorEl] = React.useState<SVGSVGElement | null>(null);

  const handlePopover = (e: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClosePopover = React.useCallback(() => setAnchorEl(null), []);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const navConfig: config[] = React.useMemo(() => {
    return [
      { text: 'Program' },
      { text: 'Benefits' },
      { text: 'Enrolling' },
      {
        text: 'Certificate',
        component:
          <>
            <KeyboardArrowDownIcon aria-describedby={id} onClick={handlePopover}/>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClosePopover}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <h3>Some text</h3>
            </Popover>
          </>

      },
      { text: 'FAQ' },
    ];
  }, []);

  return (
    <Box display="flex" justifyContent="space-around" alignItems="center">
      {navConfig.map((nav) =>
        <a href="#" className={cx(classes.navItem, { [classes.navItemWithArrow]: nav.component })} key={nav.text}>
          {nav.text}
          {nav.component}
        </a>
      )}
    </Box>
  );
}

export default withStyles(styles)(NavMenu);