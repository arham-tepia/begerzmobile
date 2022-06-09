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
}

export const FilterIcon = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => {}} style={[styles.main, props.styles]}>
      <Image source={ICONS.filter} style={{height: 32, width: 32}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
