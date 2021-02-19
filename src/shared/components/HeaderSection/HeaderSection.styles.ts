import { createStyles, Theme } from '@material-ui/core/styles';

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {
      textAlign: 'center'
    },
    title: {
      fontSize: 40,
      fontWeight: 700,
      margin: spacing(0, 'auto')
    },
    description: {
      marginTop: spacing(7),
      padding: spacing(0, '10%'),
      lineHeight: 2,
    }
  });
}