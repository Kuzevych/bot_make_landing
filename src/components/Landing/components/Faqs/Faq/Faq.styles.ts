import { createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {
      marginTop: spacing(18),
      texAlign: 'left'
    },
    heading: {
      fontSize: 24,
      fontWeight: 700
    },
    description: {}
  });
}