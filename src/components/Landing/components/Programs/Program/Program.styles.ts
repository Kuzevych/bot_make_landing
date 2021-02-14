import { createStyles, Theme } from "@material-ui/core/styles";
import { colors } from "shared/constants/colors";


export default function styles({ spacing }: Theme) {
  return createStyles({
    root:{
      padding: spacing(12),
      borderRadius: 8,
      backgroundColor: colors.white2,

      '&:hover': {
        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.16)',
        transition: '.6s',
        backgroundColor: colors.white
      }
    },
    topContainer: {
      marginBottom: spacing(8)
    },
    titleContainer: {
      display: 'flex'
    },
    currency: {
      fontWeight: 200
    },
    period: {
      fontSize: 17,
      fontWeight: 200
    },
    subtitle: {
      marginTop: spacing(5)
    },
    forWhom: {
      marginTop: spacing(4)
    },
    chatsCount: {
      marginBottom: spacing(4),
    },
    btn: {}
  });
}