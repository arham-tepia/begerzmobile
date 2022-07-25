import React from 'react';
import {Image, TouchableWithoutFeedback} from 'react-native';
import {ICONS} from '../../constants/icons';

interface Props {
  style?: any;
  onPress?(): void;
}

export const ShareIcon = (props: Props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Image source={ICONS.share} style={[{height: 16.6, width: 15}]} />
    </TouchableWithoutFeedback>
  );
};
