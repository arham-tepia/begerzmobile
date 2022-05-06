import React from 'react';
import {Image} from 'react-native';
import {ICONS} from '../../constants/icons';

interface Props {
  style?: any;
}

export const InfoIcon = (props: Props) => {
  return <Image source={ICONS.info} style={[{height: 10, width: 10}]} />;
};
