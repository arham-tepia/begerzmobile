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
  styles?: StyleProp<ViewStyle>;
  onPress?(): void;
}

export const MoreIcon = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.main, props.styles]}>
      <Image source={ICONS.more} style={{height: 14, width: 14}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 14,
    width: 14,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
