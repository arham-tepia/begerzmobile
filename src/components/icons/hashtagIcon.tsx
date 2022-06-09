import React from 'react';
import {Image} from 'react-native';
import {ICONS} from '../../constants/icons';

export const HashtagIcon = () => {
  return <Image source={ICONS.hashtag} style={{height: 33, width: 33}} />;
};
