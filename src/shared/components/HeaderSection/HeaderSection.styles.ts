import { createStyles, Theme } from '@material-ui/core/styles';

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {},
    title: {
      fontSize: 40,
      fontWeight: 700,
      margin: spacing(0, 'auto')
    },
    description: {
      marginTop: spacing(7),
      padding: spacing(0, '15%'),
      lineHeight: 2
    }
  });
}