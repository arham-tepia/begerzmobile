import React from 'react';
import {Image} from 'react-native';
import {ICONS} from '../../constants/icons';

interface Props {
  style?: any;
}

export const KarmaBlueIcon = (props: Props) => {
  return (
    <Image
      source={ICONS.karmaBlue}
      style={[{height: 83.87, width: 84}, props.style]}
    />
  );
};
export const KarmaGreenIcon = (props: Props) => {
  return (
    <Image
      source={ICONS.karmaGreen}
      style={[{height: 83.87, width: 84}, props.style]}
    />
  );
};
export const KarmaYellowIcon = (props: Props) => {
  return (
    <Image
      source={ICONS.karmaYellow}
      style={[{height: 83.87, width: 84}, props.style]}
    />
  );
};
export const KarmaGreyIcon = (props: Props) => {
  return (
    <Image
      source={ICONS.karmaGrey}
      style={[{height: 83.87, width: 84}, props.style]}
    />
  );
};
export const KarmaPurple = (props: Props) => {
  return (
    <Image
      source={ICONS.karmaPurple}
      style={[{height: 83.87, width: 84}, props.style]}
    />
  );
};
