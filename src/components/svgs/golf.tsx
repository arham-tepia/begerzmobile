import React from 'react';
import {View} from 'react-native';

import Svg, {Path} from 'react-native-svg';

export const GolfSvg = (props: {color?: string; focused?: boolean}) => (
  <View>
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.5 21C20.3284 21 21 20.3284 21 19.5C21 18.6716 20.3284 18 19.5 18C18.6716 18 18 18.6716 18 19.5C18 20.3284 18.6716 21 19.5 21Z"
        fill={props.color ?? 'black'}
      />
      <Path
        d="M11 18.03V8.98005L15.22 6.83005C15.95 6.46005 15.95 5.40005 15.21 5.04005L10.45 2.71005C9.78 2.38005 9 2.86005 9 3.60005V19C9 19.55 8.55 20 8 20C7.45 20 7 19.55 7 19V18.27C5.21 18.62 4 19.26 4 20C4 21.1 6.69 22 10 22C13.31 22 16 21.1 16 20C16 19.01 13.84 18.19 11 18.03Z"
        fill={props.color ?? 'black'}
      />
    </Svg>
  </View>
);
