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

export const SearchIcon = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.main, props.styles]}>
      <Image source={ICONS.search} style={{height: 22, width: 22}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 22,
    width: 22,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
