import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Box from '@material-ui/core/Box';

import HeaderSection from 'shared/components/HeaderSection';
import image1 from 'shared/images/reviews/image1.png';
import image2 from 'shared/images/reviews/image2.png';
import image3 from 'shared/images/reviews/image3.png';
import image4 from 'shared/images/reviews/image4.png';
import image5 from 'shared/images/reviews/image5.png';
import image6 from 'shared/images/reviews/image6.png';
import image7 from 'shared/images/reviews/image7.png';
import image8 from 'shared/images/reviews/image8.png';
import image9 from 'shared/images/reviews/image9.png';
import image10 from 'shared/images/reviews/image10.png';

import styles from './Reviews.styles';

export interface ReviewsProp extends WithStyles<typeof styles> {}

const Reviews = ({ classes }: ReviewsProp) => {
  const imagesConfig: Array<{ image: any }> = React.useMemo(() => {
    return [
      { image: image1 },
      { image: image2 },
      { image: image3 },
      { image: image4 },
      { image: image5 },
      { image: image6 },
      { image: image7 },
      { image: image8 },
      { image: image9 },
      { image: image10 },
    ];
  },[]);

  return(
    <div className={classes.root}>
      <div className={classes.container}>
        <HeaderSection
          title='Still not sure?'
          description="Here's what just a few of those people think about Botmakers…"
        />
        <Box display='flex' flexDirection='row' justifyContent='space-between' className={classes.reviewContainer}>
          <Box display='flex' flexDirection='column' className={classes.reviewsLeft}>
            {imagesConfig.slice(0, imagesConfig.length/2).map(({ image }) =>
              <div className={classes.review} key={image}>
                <img src={image} alt='img' className={classes.image}/>
              </div>
            )}
          </Box>
          <Box display='flex' flexDirection='column' className={classes.reviewsLeft}>
            {imagesConfig.slice(imagesConfig.length/2).map(({ image }) =>
              <div className={classes.review} key={image}>
                <img src={image} alt='img' className={classes.image}/>
              </div>
            )}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default withStyles(styles)(Reviews);

