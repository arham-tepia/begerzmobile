import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {FONTS} from '../../../../constants/fonts';

interface Props extends TextProps {}

export const BegHeadings = (props: Props) => {
  const {style, children, ...rest} = props;
  return (
    <Text {...rest} style={[styles.main, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  main: {
    color: '#3B3E44',
    fontSize: 20,
    lineHeight: 28,
    fontFamily: FONTS.M_SEMIBOLD,
    fontWeight: '600',
  },
});
