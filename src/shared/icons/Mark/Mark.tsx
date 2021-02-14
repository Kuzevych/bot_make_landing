import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { WithStyles, withStyles } from "@material-ui/core/styles";

import styles from './Mark.styles';

interface MarkIconProps extends Omit<SvgIconProps, 'classes'>, WithStyles<typeof styles> { }

function MarkIcon ({ classes }: MarkIconProps): React.ReactElement {
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none" classes={{ root: classes.root }}>
      <g filter="url(#filter0_ddd)">
        <rect x="8" y="4" width="17" height="17" rx="8.5" fill="#3CA5D1"/>
      </g>
      <g clipPath="url(#clip0)">
        <path d="M19.4687 10.2744L15.3874 14.3558L13.5322 12.5006" stroke="#FEFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <filter id="filter0_ddd" x="0" y="0" width="33" height="33" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="0.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="2"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.235294 0 0 0 0 0.647059 0 0 0 0 0.819608 0 0 0 0.14 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="4"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.235294 0 0 0 0 0.647059 0 0 0 0 0.819608 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow" result="shape"/>
        </filter>
        <clipPath id="clip0">
          <rect width="8.90476" height="8.90476" fill="white" transform="translate(12.0479 8.04785)"/>
        </clipPath>
      </defs>
    </SvgIcon>
  );
}

export default withStyles(styles)(MarkIcon);