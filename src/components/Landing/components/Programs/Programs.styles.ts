import { createStyles, Theme } from "@material-ui/core/styles";

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {
      padding: spacing(25, 40),
    },
    title: {
      fontSize: 40,
      fontWeight: 700,
      margin: spacing(0, 'auto')
    },
    programs: {
      marginTop: spacing(12)
    },
    program: {
      marginRight: spacing(4),
      width: '24%',

      '&:last-of-type': {
        marginRight: 0
      }
    }
  });
}