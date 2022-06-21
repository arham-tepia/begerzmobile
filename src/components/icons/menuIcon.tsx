import React from 'react';
import {Image, StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import {ICONS} from '../../constants/icons';

export const MenuIcon = (props: {
  onPress?(): void;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[props.style]}>
      <Image source={ICONS.menu} style={{height: 24, width: 24}} />
    </TouchableOpacity>
  );
};
