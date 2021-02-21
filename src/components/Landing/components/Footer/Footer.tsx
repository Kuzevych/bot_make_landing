import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

import footerLogo from 'shared/images/footerLogo.png';

import styles from './Footer.styles';
import FooterSection from './FooterSection';

export interface FooterProps extends WithStyles<typeof styles> {}

export interface FooterLinks {
  sectionTitle: string;
  links: Links[]
}

interface Links {
  text: string;
  link: string
}


const Footer = ({ classes }: FooterProps) => {

  const footerConfig: FooterLinks[] = React.useMemo(()=> {
    return[
      {
        sectionTitle: 'Company',
        links: [
          {
            text: 'About us',
            link: '/about_us'
          },
          {
            text: 'Blog',
            link: '/blog'
          },
          {
            text: 'Community',
            link: '/community'
          }
        ]
      },
      {
        sectionTitle: 'Marketplace',
        links: [
          {
            text: 'Chatbot templates',
            link: '/templates'
          },
          {
            text: 'Many Chat Templates',
            link: '/chat_templates'
          },
          {
            text: 'Chatfuel Templates',
            link: '/chatfuel_templates'
          },
          {
            text: 'Mobile monkey Templates',
            link: '/mobile_monkey_templates'
          },
          {
            text: 'Facebook Messenger Bots',
            link: '/messenger_bots'
          }
        ]
      },
      {
        sectionTitle: 'Join Botmakers',
        links: [
          {
            text: 'Benefits',
            link: '/benefits'
          },
          {
            text: 'Pricing',
            link: '/pricing'
          },
          {
            text: 'Sign up',
            link: '/signup'
          }
        ]
      },

    ];
  },[]);

  const iconsConfig = [
    { icon: <FacebookIcon classes={{ root: classes.icon }}/> },
    { icon: <LinkedInIcon classes={{ root: classes.icon }}/> },
    { icon: <YouTubeIcon classes={{ root: classes.icon }}/> },
  ];

  return(
    <footer className={classes.root}>
      <Box display="flex" flexDirection="column" className={classes.container}>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Box display="flex" flexDirection="column" className={classes.logoBlock}>
            <img src={footerLogo} alt="logo" className={classes.logo}/>
            <p className={classes.text}>
              Pass the Botmakers certification program. Realize full potential of your marketing agency.
            </p>
            <Box display="flex" justifyContent="flex-start">
              {iconsConfig.map(({ icon }) => icon)}
            </Box>
          </Box>
          {
            footerConfig.map((section) =>
              <FooterSection key={section.sectionTitle} {...section} />
            )
          }
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="space-between">

        </Box>
      </Box>
    </footer>
  );
};

export default withStyles(styles)(Footer);