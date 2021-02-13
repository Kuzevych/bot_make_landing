import { createStyles, Theme } from '@material-ui/core/styles';
import { colors } from "../../../../../../../shared/constants/colors";


export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {
      marginTop: spacing(3),
      fontSize: 14,

      '&:first-of-type': {
        marginTop: spacing(4)
      }
    },
    icon: {
      marginRight: spacing(1)
    },
    value: {
      marginRight: spacing(2)
    },
    button: {
      color: colors.blue,
      padding: 3
    },
    label: {
      color: colors.blue,
      // wordWrap: 'break-word'
    }
  });
}