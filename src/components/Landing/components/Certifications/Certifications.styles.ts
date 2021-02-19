import { createStyles, Theme } from "@material-ui/core/styles";

import { colors } from "shared/constants/colors";

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {
      padding: spacing(15, 40)
    },
    certifications: {
      marginTop: spacing(16)
    },
    certification: {
      width: '40%'
    },
    button: {
      color: colors.white,
      backgroundColor: colors.blue,
      width: 140,
      maxWidth: '100%',
      marginTop: spacing(8)
    },
    secondHeader: {
      marginTop: spacing(16)
    },
    badgeText: {
      fontWeight: 250,
      fontSize: 23,
    },
    badgeImage: {},
    advantage: {
      width: '30%'
    }
  });
}