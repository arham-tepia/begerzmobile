import React from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {ICONS} from '../../constants/icons';

export const MoneyBagFull = (props: {style?: StyleProp<ImageStyle>}) => {
  return (
    // <TouchableOpacity onPress={() => {}} style={styles.main}>
    <Image
      source={ICONS.moneybagFull}
      style={[{height: 9, width: 7}, props.style]}
    />
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 9,
    width: 7,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
