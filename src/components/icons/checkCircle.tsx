import React from 'react';
import {Image} from 'react-native';
import {ICONS} from '../../constants/icons';

export const CheckCircle = () => {
  return <Image source={ICONS.checkCircle} style={{height: 60, width: 60}} />;
};
