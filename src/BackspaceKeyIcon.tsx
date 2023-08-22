import * as React from 'react';
import Svg, { type SvgProps, Path } from 'react-native-svg';

const BackspaceKeyIcon = (props: SvgProps) => (
  <Svg
    viewBox="0 0 47 32"
    height={props.height || 32}
    width={props.width || 47}
    fill={props.fill || '#1C1C1C'}
    {...props}
  >
    <Path
      d="M44.8554 4.50017C44.8554 2.84325 43.5122 1.50006 41.8553 1.50006H16.3597C15.5092 1.50006 14.6987 1.86103 14.1297 2.4932L4.33994 13.3707C3.34905 14.4717 3.30997 16.1311 4.24794 17.2775L14.166 29.3996C14.7359 30.096 15.5882 30.4999 16.488 30.4999H41.8553C43.5122 30.4999 44.8554 29.1567 44.8554 27.4998V4.50017Z"
      stroke={props.fill || '#1C1C1C'}
      strokeWidth={3.00011}
    />
    <Path
      d="M33.082 10.668L22.1106 21.6394"
      stroke={props.stroke || 'white'}
      strokeWidth={3.00011}
      strokeLinecap="round"
    />
    <Path
      d="M22.7461 10.8203L33.7175 21.7917"
      stroke={props.stroke || 'white'}
      strokeWidth={3.00011}
      strokeLinecap="round"
    />
  </Svg>
);

export default BackspaceKeyIcon;
