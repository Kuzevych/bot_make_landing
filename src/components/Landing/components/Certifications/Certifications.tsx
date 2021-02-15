import * as React from 'react';
import { withStyles, WithStyles } from "@material-ui/core/styles";

import styles from './Certifications.styles';
import Box from "@material-ui/core/Box";
import HeaderSection from "../../../../shared/components/HeaderSection";

export interface CertificationsProps extends WithStyles<typeof styles> {}

const Certifications = ({ classes }: CertificationsProps) => {
  return(
    <Box display="flex" className={classes.root} flexDirection="column">
      <HeaderSection
        title="Choose the certification you wish to get"
        description="Each certification test possesses 20 questions. Successfully complete the test a score of 85% or higher to get your digital certificate and badge."
      />
    </Box>
  );
};

export default withStyles(styles)(Certifications);