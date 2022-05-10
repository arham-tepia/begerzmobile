import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: any;
}

export const GreyCard = (props: any) => {
  const {children, style} = props;
  return <View style={[styles.main, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  main: {
    minHeight: 342,
    backgroundColor: '#3B3E44',
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
});
