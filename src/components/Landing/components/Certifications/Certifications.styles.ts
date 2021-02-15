import { createStyles, Theme } from "@material-ui/core/styles";

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {
      padding: spacing(15,40)
    }
  });
}