import * as React from 'react';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import Program from "./Program/Program";
import { AdvantageI } from './Program/components/Advantage';

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

function Programs ({ classes, title }: ProgramsProps): React.ReactElement {

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
        ]
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
        ]
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
        ]
      }
    ];
  },[]);

  const handleSubmit = (price: number, chats: number) => {
    console.log(price);
    console.log(chats);
  };

  return (
    <Box display="flex" className={classes.root} flexDirection="column">
      <h2 className={classes.title}> {title} </h2>
      <Box display="flex" justifyContent="space-between" className={classes.programs}>
        {
          programsConfig.map((config) =>
            <Program classes={{ root: classes.program }} key={Math.random()} {...config} onSubmit={handleSubmit} />
          )
        }
      </Box>
    </Box>
  );
}

export default withStyles(styles)(Programs);
