import { createStyles, Theme } from '@material-ui/core/styles';

import { colors } from "shared/constants/colors";

export default function styles({ spacing }: Theme) {
  return createStyles({
    root: {
      maxHeight: 550,
      background: `linear-gradient(to right, ${colors.lightBlack},  ${colors.lightBlue})`,
      color: 'white'
    },
    container: {
      padding: spacing(15, 40),
      textAlign: 'center'
    },
    enrolls: {
      marginTop: spacing(12)
    },
    enroll: {
      width: '24%',

      '&::before': {
        content: '""',
        position: 'relative',
        top: '30%',
        left: '80%',
        borderTop: `1px dashed ${colors.darkBlue}`,
        width: '118%',
        zIndex: 1
      },

      '&:last-of-type': {
        '&::before': {
          content: '""',
          position: 'relative',
          border: 'none',
        },
      }
    },
    image: {
      zIndex: 2
    }
  });
}