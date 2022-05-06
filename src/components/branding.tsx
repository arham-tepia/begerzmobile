import React from 'react';
import {Image} from 'react-native';
import {ICONS} from '../constants/icons';

export const BrandingMain = () => {
  return (
    <Image
      source={ICONS.fullLogo}
      style={{height: 60, width: 136.25}}
      resizeMode="contain"
    />
  );
};
