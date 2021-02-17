import { createStyles, Theme } from '@material-ui/core/styles';

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {
      marginTop: spacing(7)
    },
    image: {
      marginRight: spacing(4)
    },
    title: {
      fontSize: 18,
      fontWeight: 700,
    },
    description: {
      fontSize: 14,
      margin: 0
    }
  });
}