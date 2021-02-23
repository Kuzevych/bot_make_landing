import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import HeaderSection from 'shared/components/HeaderSection';
import Certification, { Item } from './components/Certification';
import cert1 from 'shared/images/certification/cert1.png';
import cert2 from 'shared/images/certification/cert2.png';
import cert3 from 'shared/images/certification/cert3.png';
import cert4 from 'shared/images/certification/cert4.png';
import badges from 'shared/images/certification/badges.png';
import Advantage from 'shared/components/Advantage';

import styles from './Certifications.styles';

export interface CertificationsProps extends WithStyles<typeof styles> {}

const Certifications = ({ classes }: CertificationsProps) => {
  
  const certificationsConfig: Array<Item> = React.useMemo(()=>{
    return [
      {
        title: 'Unlimited attempts\n',
        description: 'Don\'t worry if you didn\'t pass the test, you still have chances to retake it.\n',
        image: cert1,
        classes: {
          root: classes.certification
        }
      },
      {
        title: 'Choose your favorite platform\n',
        description: 'Get certified on the platform you work on - ManyChat, Chatfuel and MobileMonkey. Successfully pass platform-related questions + Facebook Messenger policy questions to get certified.',
        image: cert2,
        classes: {
          root: classes.certification
        }
      },
      {
        title: 'Pass more tests, get more certificates\n',
        description: 'Both, individuals and agencies, will get an opportunity to pass the test on another platform to get another certificate.\n',
        image: cert3,
        classes: {
          root: classes.certification
        }
      },
      {
        title: 'Certifited Agency\n',
        description: 'For agencies, we offer the ability to pass the tests for two or more team members to acknowledge the credibility of your agency.\n',
        image: cert4,
        classes: {
          root: classes.certification
        }
      }
    ];
  },[]);

  const avantages = [
    { value: 'Anyone can verify your Botmakers Certification by clicking on your badge.' },
    { value: 'Display your hard work and validate your expertise.' },
    { value: 'Each badge gives details about the specific skills you developed.' }
  ];
  
  return(
    <Box display="flex" className={classes.root} alignItems="center" flexDirection="column">
      <HeaderSection
        title="Choose the certification you wish to get"
        description="Each certification test possesses 20 questions. Successfully complete the test a score of 85% or higher to get your digital certificate and badge."
      />
      <Box display="flex" flexWrap="wrap" justifyContent="space-between" className={classes.certifications}>
        {certificationsConfig.map((certification) =>
          <Certification key={certification.title} {...certification} />
        )}
      </Box>
      <Button variant="contained" color="primary" className={classes.button}>Get Started</Button>
      <HeaderSection
        title="Certification Badge"
        description="Add your Botmakers certification badge to your LinkedIn profile or Facebook account to demonstrate your professional and technical expertise."
        classes={{ root: classes.secondHeader }}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.badgeBlock}>
        <h2 className={classes.badgeText}>YOU&apos;VE EARNED IT. GET THE RECOGNITION YOU DESERVE.</h2>
        <img src={badges} alt="" className={classes.badgeImage}/>
      </Box>
      <Box display="flex" justifyContent="space-between" className={classes.advantageBlock}>
        {avantages.map((advantage) =>
          <Advantage key={advantage.value} {...advantage} classes={{ root: classes.advantage }}/>
        )}
      </Box>
    </Box>
  );
};

export default withStyles(styles)(Certifications);