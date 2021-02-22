import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";

import illustration1 from 'shared/images/illustration1.png';
import illustration2 from 'shared/images/illustration2.png';
import Benefit from "./components/Benefit";

import styles from './Benefits.styles';

export interface BenefitsProps extends WithStyles<typeof styles> {
}

interface BenefitI {
  title: string;
  description: string;
  image: File
}

const Benefits = ({ classes }: BenefitsProps) => {

  const benefitsConfig: BenefitI[] = React.useMemo(()=>{
    return [
      {
        title: 'Certification benefits\n',
        description: 'Certification is an efficient way to gain a competitive advantage and improve your professional credibility. ',
        image: illustration1,
      },
      {
        title: 'Showcase your company in front of the clients',
        // eslint-disable-next-line max-len
        description: 'After passing a certification test, we will list your agency lse pob our website. Hundreds of prospective clients visit website each month so that they’ll find you faster.',
        image: illustration2
      },
    ];
  },[]);

  return (
    <Box display="flex" flexDirection="column" className={classes.root}>
      {
        benefitsConfig.map((benefit) =>
          <Benefit
            key={benefit.title}
            {...benefit}
            classes={{
              root: classes.benefit,
              image: classes.image,
              textContainer: classes.textContainer,
              description: classes.description,
              title: classes.title
            }}
          />
        )
      }
    </Box>
  );
};

export default withStyles(styles)(Benefits);