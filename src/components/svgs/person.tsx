import React from 'react';
import {View} from 'react-native';

import Svg, {Path} from 'react-native-svg';
import {COLORS} from '../../constants/colors';

export const BottomTabFocusBox = () => {
  return (
    <View
      style={{
        height: 20,
        position: 'absolute',
        bottom: -10,
        width: 30,
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: COLORS.lightPink,
      }}
    />
  );
};

export const PersonSVG = (props: {color?: string; focused: boolean}) => (
  <View>
    <Svg width="16" height="20" viewBox="0 0 16 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.84 16.1929C15.84 19.4889 11.32 19.8699 7.921 19.8699L7.67776 19.8697C5.5122 19.8644 0 19.7277 0 16.1729C0 12.9442 4.33835 12.5127 7.71148 12.4964L8.16423 12.4961C10.3296 12.5014 15.84 12.6381 15.84 16.1929ZM7.921 13.9959C3.66 13.9959 1.5 14.7279 1.5 16.1729C1.5 17.6309 3.66 18.3699 7.921 18.3699C12.181 18.3699 14.34 17.6379 14.34 16.1929C14.34 14.7349 12.181 13.9959 7.921 13.9959ZM7.921 -0.000488281C10.849 -0.000488281 13.23 2.38151 13.23 5.30951C13.23 8.23751 10.849 10.6185 7.921 10.6185H7.889C4.967 10.6095 2.6 8.22651 2.60997 5.30651C2.60997 2.38151 4.992 -0.000488281 7.921 -0.000488281ZM7.921 1.42751C5.78 1.42751 4.03798 3.16851 4.03798 5.30951C4.031 7.44351 5.76 9.18351 7.892 9.19151L7.921 9.90551V9.19151C10.061 9.19151 11.802 7.44951 11.802 5.30951C11.802 3.16851 10.061 1.42751 7.921 1.42751Z"
        fill={props.color ?? 'black'}
      />
    </Svg>
    {props.focused && <BottomTabFocusBox />}
  </View>
);
