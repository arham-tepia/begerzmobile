import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {ICONS} from '../../constants/icons';

export const InfoIconBig = (props: {onPress?(): void}) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image source={ICONS.infoBig} style={{height: 24, width: 24}} />
    </TouchableOpacity>
  );
};
