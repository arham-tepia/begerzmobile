import React from 'react';
import {View} from 'react-native';

import Svg, {Path} from 'react-native-svg';
import {BottomTabFocusBox} from './person';

export const HomeSVG = (props: {color?: string; focused: boolean}) => (
  <View>
    <Svg width="21" height="22" viewBox="0 0 21 22" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.717 14.2913C12.921 14.2913 13.901 15.2643 13.901 16.4603V19.5363C13.901 19.7933 14.107 19.9993 14.371 20.0053H16.277C17.779 20.0053 19 18.7993 19 17.3173V8.59325C18.993 8.08325 18.75 7.60325 18.333 7.28425L11.74 2.02625C10.855 1.32525 9.617 1.32525 8.729 2.02825L2.181 7.28225C1.748 7.61125 1.505 8.09125 1.5 8.61025V17.3173C1.5 18.7993 2.721 20.0053 4.223 20.0053H6.147C6.418 20.0053 6.638 19.7903 6.638 19.5263C6.638 19.4683 6.645 19.4103 6.657 19.3553V16.4603C6.657 15.2713 7.631 14.2993 8.826 14.2913H11.717ZM16.277 21.5053H14.353C13.251 21.4793 12.401 20.6143 12.401 19.5363V16.4603C12.401 16.0913 12.094 15.7913 11.717 15.7913H8.831C8.462 15.7933 8.157 16.0943 8.157 16.4603V19.5263C8.157 19.6013 8.147 19.6733 8.126 19.7413C8.018 20.7313 7.172 21.5053 6.147 21.5053H4.223C1.894 21.5053 0 19.6263 0 17.3173V8.60325C0.01 7.60925 0.468 6.69925 1.259 6.10025L7.794 0.85525C9.233 -0.28475 11.238 -0.28475 12.674 0.85325L19.256 6.10325C20.029 6.69225 20.487 7.60025 20.5 8.58225V17.3173C20.5 19.6263 18.606 21.5053 16.277 21.5053Z"
        fill={props.color ?? 'black'}
      />
    </Svg>
    {props.focused && <BottomTabFocusBox />}
  </View>
);
