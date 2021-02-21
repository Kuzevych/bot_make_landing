import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Box from '@material-ui/core/Box';

import HeaderSection from 'shared/components/HeaderSection';
import Faq from './Faq';

import styles from './Faqs.styles';

export interface FaqsProps extends WithStyles<typeof styles> {}

export interface Question {
  question: string;
  answer: string;
}

const Faqs = ({ classes }: FaqsProps) => {

  const questionConfig: Question[] = React.useMemo(()=>{
    return [
      {
        question: 'Can I retake the test?',
        answer: 'Yes. You can retake a test during a year.'
      },
      {
        question: 'Where can I or my clients check if my certification is up to date?',
        answer: 'Yes. You and your clients can always verify your certification status on the bot developers page: <a href="#">https://botmakers.net/chatbot-developers<a/>'
      },
      {
        question: 'Can I pass another test?',
        answer: 'Yes. You can take another test. If you pass the test successfully, you will get one more certificate and digital badge. No additional fee required.'
      },
      {
        question: 'Can I pass the certification test once and my certificate will not expire?',
        answer: 'Unfortunately, no. Chatbot platforms update regularly, adding more and more cool features for Messenger Marketing professionals. Facebook Messenger Policy changes as well. </br></br>' +
          'Due to these changes, we will need to change and update the list of questions and answers and you will need to re-pass your test once a year.'
      },
    ];
  },[]);

  return(
    <div className={classes.root}>
      <HeaderSection
        title='Certification FAQs'
      />
      <Box display='flex' flexDirection='column'>
        {questionConfig.map((question) =>
          <Faq key={question.question} {...question} />
        )}
      </Box>
    </div>
  );
};

export default withStyles(styles)(Faqs);