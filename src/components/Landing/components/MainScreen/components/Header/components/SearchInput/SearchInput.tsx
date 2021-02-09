import * as React from 'react';
import { IconButton, InputBase, Paper } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { withStyles, WithStyles } from "@material-ui/core/styles";

import styles from './SearchInput.styles';

export interface SearchInputProps extends WithStyles<typeof styles> {
}

function SearchInput ({ classes }: SearchInputProps): React.ReactElement {
  let [searchValue, setSearchValue] = React.useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('submit');
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchValue(value);
  };

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        value={searchValue}
        onChange={handleSearch}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search">
        <SearchIcon classes={{ root: classes.icon }}/>
      </IconButton>
    </Paper>

  );
}

export default withStyles(styles)(SearchInput);
