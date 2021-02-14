import { createStyles, Theme } from '@material-ui/core/styles';

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {
      maxHeight: 550,
      background: 'linear-gradient(to right, #090A19, #24295B)',
      color: 'white'
    },
    container: {
      padding: spacing(25, 40),
      textAlign: 'center'
    }
  });
}