import { createStyles, Theme } from "@material-ui/core/styles";
import { colors } from "shared/constants/colors";


export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {},
    textBlock: {
      width: 512
    },
    title: {
      fontSize: 48,
      fontWeight: 800,
      margin: 0
    },
    text: {
      fontSize: 18,
      fontWeight: 300,
      margin: spacing(8, 0, 0, 0),
    },
    startButton: {
      color: colors.white,
      backgroundColor: colors.blue,
      width: 140,
      maxWidth: '100%',
      marginTop: spacing(8)
    },
    image: {
      maxWidth: 440,
      height: 'auto'
    }
  });
}