import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {COLORS} from '../constants/colors';
import {MyTextMulish} from './textMulish';

interface Props {
  children?: any;
  style?: StyleProp<TextStyle>;
}

export const ErrorText = (props: Props) => {
  return (
    <MyTextMulish
      style={[
        {
          fontWeight: '400',
          fontSize: 12,
          color: COLORS.primary,
          marginLeft: 3
        },
        props.style
      ]}>
      {props.children}
    </MyTextMulish>
  );
};
