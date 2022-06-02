import React from 'react';
import {Image} from 'react-native';
import {ICONS} from '../../constants/icons';

export const PaymentIcon = () => {
  return <Image source={ICONS.payment} style={{height: 16, width: 22}} />;
};
