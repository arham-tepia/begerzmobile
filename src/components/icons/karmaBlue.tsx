import React from 'react';
import {Image} from 'react-native';
import {ICONS} from '../../constants/icons';

interface Props {
  style?: any;
}

export const KarmaBlueIcon = (props: Props) => {
  return (
    <Image source={ICONS.karmaBlue} style={[{height: 83.87, width: 84}]} />
  );
};
