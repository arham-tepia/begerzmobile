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

export const WhiteEyeIcon = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => {}} style={[styles.main, props.styles]}>
      <Image source={ICONS.eyeWhite} style={{height: 15, width: 22}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 15,
    width: 22,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
