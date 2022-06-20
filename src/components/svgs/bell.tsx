import React from 'react';
import {View} from 'react-native';

import Svg, {Path} from 'react-native-svg';

export const BellSvg = (props: {color?: string; focused?: boolean}) => (
  <View>
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.0005 22C13.1005 22 14.0005 21.1 14.0005 20H10.0005C10.0005 21.1 10.8905 22 12.0005 22ZM18.0005 16V11C18.0005 7.93 16.3605 5.36 13.5005 4.68V4C13.5005 3.17 12.8305 2.5 12.0005 2.5C11.1705 2.5 10.5005 3.17 10.5005 4V4.68C7.63054 5.36 6.00054 7.92 6.00054 11V16L4.71054 17.29C4.08054 17.92 4.52054 19 5.41054 19H18.5805C19.4705 19 19.9205 17.92 19.2905 17.29L18.0005 16Z"
        fill={props.color ?? 'black'}
      />
    </Svg>
  </View>
);
