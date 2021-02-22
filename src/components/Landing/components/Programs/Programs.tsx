import * as React from 'react';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import { AdvantageI } from 'shared/components/Advantage';
import Program from './Program';
import HeaderSection from "shared/components/HeaderSection";

import styles from "./Programs.styles";

export interface ProgramsProps extends WithStyles<typeof styles> {
  title: string;
}

interface ProgramsConfig {
  title: string;
  price: number;
  description: string;
  advantage: AdvantageI[];
}

const Programs = ({ classes, title }: ProgramsProps) => {

  const programsConfig: ProgramsConfig[] = React.useMemo(()=>{
    return [
      {
        title: 'Chatbot Developer Certified Start',
        price: 100,
        description: 'For individual marketers or bot developers',
        advantage: [
          { value: 'Unlimited attempts' },
          {
            value: 'Digital badges',
            addInfo: true
          },
          { value: 'PDF Digital certificates\n' },
          {
            value: 'Pass more test, get more certificate',
            label: true
          }
        ],
        classes: {
          root: classes.program,
          titleContainer: classes.programTitle
        },
      },
      {
        title: 'Chatbot Developer Certified Expert',
        price: 200,
        description: 'For individual marketers or bot developers',
        advantage: [
          { value: 'Unlimited attempts' },
          {
            value: 'Digital badges',
            addInfo: true
          },
          { value: 'PDF Digital certificates\n' },
          {
            value: 'Pass more test, get more certificate',
            label: true
          },
          { value: 'The ability to pass the test for two or more professionals ' },
        ],
        classes: {
          root: classes.program,
          titleContainer: classes.programTitle
        },
      },
      {
        title: 'Chatbot Developer Certified Master',
        price: 300,
        description: 'For individual marketers or bot developers',
        advantage: [
          { value: 'Unlimited attempts' },
          {
            value: 'Digital badges',
            addInfo: true
          },
          { value: 'PDF Digital certificates\n' },
          {
            value: 'Pass more test, get more certificate',
            label: true
          },
          { value: 'The ability to pass the test for two or more professionals ' }
        ],
        classes: {
          root: classes.program,
          titleContainer: classes.programTitle
        },
      }
    ];
  },[]);

  const handleSubmit = (price: number, chats: string) => {
    console.log(price);
    console.log(chats);
  };

  return (
    <Box display="flex" flexDirection="column" className={classes.root}>
      <HeaderSection title={title}/>
      <Box display="flex" justifyContent="space-between" className={classes.programs}>
        {
          programsConfig.map((config, idx) =>
            <Program key={config.title + idx} {...config} onSubmit={handleSubmit} />
          )
        }
      </Box>
    </Box>
  );
};

export default withStyles(styles)(Programs);
