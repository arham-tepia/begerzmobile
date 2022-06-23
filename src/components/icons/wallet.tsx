import React from 'react';
import {Image} from 'react-native';
import {ICONS} from '../../constants/icons';

interface Props {
  style?: any;
}

export const Wallet = (props: Props) => {
  return (
    <Image source={ICONS.wallet} style={[{height: 47.31, width: 47.31}]} />
  );
};
