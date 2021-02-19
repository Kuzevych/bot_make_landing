import { createStyles, Theme } from '@material-ui/core/styles';

import { colors } from "shared/constants/colors";

const styles = ({ spacing }: Theme) => {
  return createStyles({
    root: {
      height: '100vh',
      background: `linear-gradient(to right, ${colors.lightBlack},  ${colors.lightBlue})`,
      color: 'white'
    },
    container: {
      margin: spacing(0, 40),
      height: '100%'
    }
  });
};

export default styles;