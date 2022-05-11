import React from 'react';

import Svg, {Path} from 'react-native-svg';

export const PlusSVG = (props: {color?: string}) => (
  <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <Path
      d="M14 5.8335V22.1668"
      stroke={props.color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M5.83301 14H22.1663"
      stroke={props.color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
