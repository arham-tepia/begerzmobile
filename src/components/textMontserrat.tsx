import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {FONTS} from '../constants/fonts';

interface Props extends TextProps {}

export const MyTextMontserrat = (props: Props) => {
  const {style, children, ...rest} = props;
  return (
    <Text {...rest} style={[styles.main, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  main: {
    fontFamily: FONTS.Montserrat_REGULAR,
    color: '#000000',
  },
});
