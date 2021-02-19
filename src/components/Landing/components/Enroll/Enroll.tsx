import * as React from 'react';
import { WithStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import file from 'shared/images/file.png';
import book from 'shared/images/book.png';
import like from 'shared/images/like.png';
import HeaderSection from "shared/components/HeaderSection";

import styles from "./Enroll.styles";

type EnrollConfig = {
  text: string;
  image: any
}

export interface EnrollProps extends WithStyles<typeof styles> {}

const Enroll = ({ classes }: EnrollProps) => {

  const enrollConfig:EnrollConfig[] = React.useMemo(()=>{
    return [
      {
        text: 'Complete the application from',
        image: file
      },
      {
        text: 'Pass the test with a score of 85% or higher',
        image: book
      },
      {
        text: 'Get your certificate and digital badge',
        image: like
      },
    ];
  },[]);


  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <HeaderSection title="How to enroll" />
        <Box display="flex" flexDirection="row" justifyContent="space-between" className={classes.enrolls}>
          {
            enrollConfig.map(({ text, image })=>
              <Box key={text} display="flex" flexDirection="column" alignItems="center" className={classes.enroll}>
                <img src={image} alt="" className={classes.image}/>
                <p>{text}</p>
              </Box>
            )
          }
        </Box>
      </div>
    </div>
  );
};

export default withStyles(styles)(Enroll);
