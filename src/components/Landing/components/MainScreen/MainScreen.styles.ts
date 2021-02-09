import { createStyles, Theme } from '@material-ui/core/styles';

const styles = ({ spacing }: Theme) => {
  return createStyles({
    root: {
      height: '100vh',
      background: 'linear-gradient(to right, #090A19, #24295B)',
      color: 'white'
    },
    container: {
      margin: spacing(0, 40),
      height: '100%'
    }
  });
};

export default styles;