import React from 'react';
import {Image} from 'react-native';
import {ICONS} from '../../constants/icons';

export const VideoCam = () => {
  return <Image source={ICONS.videocam} style={{height: 12, width: 18}} />;
};
