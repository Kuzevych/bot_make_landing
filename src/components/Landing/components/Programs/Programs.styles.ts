import { createStyles, Theme } from "@material-ui/core/styles";

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {
      padding: spacing(15, 40),
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