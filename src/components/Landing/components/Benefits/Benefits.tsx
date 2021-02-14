import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

// @ts-ignore
import illustration1 from 'shared/images/illustration1.png';
// @ts-ignore
import illustration2 from 'shared/images/illustration2.png';
import Benefit from "./components/Benefit";

import styles from './Benefits.styles';

export interface BenefitsProps extends WithStyles<typeof styles> {
}

interface BenefitI {
  title: string;
  description: string;
}

function Benefits ({ classes }: BenefitsProps): React.ReactElement {

  const benefitsConfig: BenefitI[] = React.useMemo(()=>{
    return [
      {
        title: 'Certification benefits\n',
        description: 'Certification is an efficient way to gain a competitive advantage and improve your professional credibility. ',
      },
      {
        title: 'Showcase your company in front of the clients',
        // eslint-disable-next-line max-len
        description: 'After passing a certification test, we will list your agency lse pob our website. Hundreds of prospective clients visit website each month so that they’ll find you faster.',
      },
    ];
  },[]);

  return (
    <Box display="flex" flexDirection="column" className={classes.root}>
      {
        benefitsConfig.map((benefit, idx) =>
          <Benefit
            key={benefit.title}
            {...benefit}
            image={idx === 0 ? illustration1 : illustration2}
            classes={{ root: classes.benefit }}
          />
        )
      }
    </Box>
  );
}

export default withStyles(styles)(Benefits);