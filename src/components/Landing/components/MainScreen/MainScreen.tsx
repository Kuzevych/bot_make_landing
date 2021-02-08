import * as React from 'react';
import { Box } from "@material-ui/core";
import { WithStyles, withStyles } from '@material-ui/core/styles';

import styles from './MainScreen.styles';

export interface MainScreenProps extends WithStyles<typeof styles> {}

const MainScreen = (props: MainScreenProps) => {

    const { classes } = props;

    return (
        <Box display="flex" flexDirection="column" className={classes.root}>
            <p>Header</p>
            <p>Main</p>
            <p>Bottom</p>
        </Box>
    );
}

export default withStyles(styles)(MainScreen);