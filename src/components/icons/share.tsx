import React from 'react';
import {Image} from 'react-native';
import {ICONS} from '../../constants/icons';

interface Props {
  style?: any;
}

export const ShareIcon = (props: Props) => {
  return <Image source={ICONS.share} style={[{height: 16.6, width: 15}]} />;
};
