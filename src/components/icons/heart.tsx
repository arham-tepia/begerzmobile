import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle
} from 'react-native';
import {ICONS} from '../../constants/icons';

interface Props {
  onPress?(): void;
  style?: StyleProp<ViewStyle>;
}

export const HeartIcon = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.main, props.style]}>
      <Image source={ICONS.heart} style={{height: 18, width: 18}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 18,
    width: 18,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
