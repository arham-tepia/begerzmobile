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

export const ExploreIcon = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => {}} style={[styles.main, props.styles]}>
      <Image source={ICONS.explore} style={{height: 20.72, width: 20.26}} />
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
