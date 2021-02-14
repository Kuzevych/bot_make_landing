import { createStyles, Theme } from "@material-ui/core/styles";

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {
      padding: spacing(0, 40, 25, 40),

    },
    benefit: {
      marginTop: 0,

      '&:nth-child(odd)': {
        flexDirection: 'row-reverse'
      }
    }
  });
}