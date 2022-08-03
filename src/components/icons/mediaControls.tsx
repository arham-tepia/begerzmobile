import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {ICONS} from '../../constants/icons';

export const PlayIcon = () => {
  return <Image source={ICONS.play} style={{height: 60, width: 60}} />;
};
export const PauseIcon = () => {
  return <Image source={ICONS.pause} style={{height: 60, width: 60}} />;
};
export const ReplayIcon = () => {
  return <Image source={ICONS.replay} style={{height: 45, width: 40}} />;
};
export const ReplayIconPressable = (props: {onPress?(): void}) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image source={ICONS.replay} style={{height: 45, width: 40}} />
    </TouchableOpacity>
  );
};
