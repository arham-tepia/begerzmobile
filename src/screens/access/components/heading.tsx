import React from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';

interface Props extends TextProps {}

export const AccessHeading = (props: Props) => {
  const {style, children, ...rest} = props;
  return (
    <Text {...rest} style={[styles.main, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  main: {
    color: '#000000',
    fontSize: 34,
    lineHeight: 36,
    letterSpacing: 0,
  },
});
