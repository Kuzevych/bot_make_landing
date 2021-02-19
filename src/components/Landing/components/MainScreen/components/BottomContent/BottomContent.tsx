import * as React from 'react';
import Box from '@material-ui/core/Box';
import { withStyles, WithStyles } from "@material-ui/styles";

import ArrowUpIcon from "shared/icons/ArrowUp";
import CubeIcon from "shared/icons/Cube";
import AwardIcon from "shared/icons/Award";

import styles from "./BottomContent.styles";

export interface BottomContentProps extends WithStyles<typeof styles> {}

interface bottomConfigI {
  // eslint-disable-next-line no-undef
  icon: JSX.Element,
  title: string;
  text: string;
}

const BottomContent = ({ classes }: BottomContentProps) => {

  const bottomConfig: bottomConfigI[] = React.useMemo(()=>{
    return [
      {
        icon: <ArrowUpIcon classes={{ root:classes.icon }}/>,
        title: 'Pass the Botmakers certification program ',
        text: 'Realize full potential of your marketing agency'
      },
      {
        icon: <CubeIcon classes={{ root:classes.icon }} />,
        title: 'Earn a valuable credential',
        text: 'Showcase your key skills and extensive knowledge'
      },
      {
        icon: <AwardIcon classes={{ root:classes.icon }} />,
        title: 'Choose the right certification ',
        text: 'Certifications are offered in a variety of subjects to help you get ahead'
      }

    ];
  },[]);

  return(
    <Box display="flex" justifyContent="space-between" className={classes.root}>
      {bottomConfig.map((benefit) =>
        <Box key={benefit.text} display="flex" className={classes.benefits}>
          {benefit.icon}
          <div>
            <h2 className={classes.benefitTitle}>{benefit.title}</h2>
            <p className={classes.benefitText}>{benefit.text}</p>
          </div>
        </Box>
      )}
    </Box>
  );
};

export default withStyles(styles)(BottomContent);