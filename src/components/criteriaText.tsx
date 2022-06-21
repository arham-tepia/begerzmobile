import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {MyTextMulish} from './textMulish';

interface Props {
  children?: any;
  style?: StyleProp<TextStyle>;
}

export const CriteriaText = (props: Props) => {
  return (
    <MyTextMulish
      style={[
        {
          fontWeight: '400',
          fontSize: 12,
          color: 'grey',
          marginLeft: 7
        },
        props.style
      ]}>
      {props.children}
    </MyTextMulish>
  );
};
