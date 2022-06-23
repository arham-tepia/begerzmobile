import React from 'react';
import {Image} from 'react-native';
import {ICONS} from '../../constants/icons';

export const StarColored = (props: {style?: any}) => {
  return (
    <Image
      source={ICONS.starColored}
      style={[{height: 50, width: 50}, props.style]}
    />
  );
};
