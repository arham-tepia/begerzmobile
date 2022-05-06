import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Divider = (props: Props) => {
  return (
    <View
      style={[
        {
          height: 1,
          borderWidth: 1,
          backgroundColor: '#E5E5E5',
          borderColor: '#E5E5E5',
        },
        props.style,
      ]}
    />
  );
};
