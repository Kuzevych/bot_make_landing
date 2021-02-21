import { createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {
      padding: spacing(15, 45),
    }
  });
}