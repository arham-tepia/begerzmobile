import React from 'react';
import {Image} from 'react-native';
import {ICONS} from '../../constants/icons';

export const LinkIcon = () => {
  return (
    <Image
      source={ICONS.link}
      style={{
        height: 18,
        width: 18,
        marginRight: 5,
        alignSelf: 'center',
        marginBottom: 3,
      }}
    />
  );
};
