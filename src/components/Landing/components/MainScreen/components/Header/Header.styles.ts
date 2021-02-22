import { createStyles, Theme } from "@material-ui/core/styles";

export default function styles({ spacing }: Theme){

  return createStyles({
    root: {
      marginTop: spacing(4)
    },
    logoText: {
      marginLeft: spacing(2)
    },
    navMenu: {},
    menuIcon: {
      display: 'none'
    },
  });
}