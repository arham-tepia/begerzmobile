import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {ICONS} from '../../constants/icons';

interface Props {
  style?: any;
  onPress?(): void;
}

export const InfoPinkIcon = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image source={ICONS.infoPink} style={[{height: 20, width: 20}]} />
    </TouchableOpacity>
  );
};
