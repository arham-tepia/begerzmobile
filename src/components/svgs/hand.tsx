import React from 'react';
import {View} from 'react-native';

import Svg, {Path} from 'react-native-svg';

export const HandSvg = (props: {color?: string; focused?: boolean}) => (
  <View>
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 11C1.9 11 1 11.9 1 13V20C1 21.1 1.9 22 3 22C4.1 22 5 21.1 5 20V13C5 11.9 4.1 11 3 11Z"
        fill={props.color ?? 'black'}
      />
      <Path
        d="M10 5.3C10 3.45 11.45 2 13.3 2C14.34 2 15.35 2.49 16 3.25C16.65 2.49 17.66 2 18.7 2C20.55 2 22 3.45 22 5.3C22 7.4 19.5 9.81 16.67 12.39C16.29 12.74 15.7 12.74 15.32 12.39C12.5 9.81 10 7.4 10 5.3Z"
        fill={props.color ?? 'black'}
      />
      <Path
        d="M19.99 17H13.16C13.05 17 12.94 16.98 12.83 16.94L11.36 16.43C11.1 16.34 10.97 16.06 11.06 15.8C11.15 15.54 11.44 15.4 11.7 15.5L12.82 15.93C12.93 15.97 13.06 16 13.18 16H15.81C16.46 16 16.99 15.47 16.99 14.82C16.99 14.33 16.68 13.89 16.22 13.71L9.3 11.13C9.08 11.04 8.84 11 8.6 11H7V20.02L13.37 21.83C13.78 21.95 14.22 21.93 14.62 21.78L22 19C22 17.89 21.1 17 19.99 17Z"
        fill={props.color ?? 'black'}
      />
    </Svg>
  </View>
);
