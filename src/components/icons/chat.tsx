import React from 'react';
import {Image} from 'react-native';
import {ICONS} from '../../constants/icons';

export const ChatIcon = () => {
  return <Image source={ICONS.chat} style={{height: 20, width: 19.99}} />;
};
