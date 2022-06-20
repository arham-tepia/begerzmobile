import React from 'react';
import {View} from 'react-native';

interface Props {
  top?: boolean;
  bottom?: boolean;
  margin?: number;
  left?: boolean;
  right?: boolean;
}

export const Margin = (props: Props) => {
  const {top, bottom, margin, left, right} = props;

  if (top) {
    return <View style={{marginTop: margin}} />;
  }

  if (bottom) {
    return <View style={{marginBottom: margin}} />;
  }
  if (right) {
    return <View style={{marginRight: margin}} />;
  }
  if (left) {
    return <View style={{marginLeft: margin}} />;
  }

  return <View />;
};
