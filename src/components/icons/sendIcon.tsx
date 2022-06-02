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

export const SendIcon = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.main, props.style]}>
      <Image source={ICONS.send} style={{height: 24, width: 24}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
