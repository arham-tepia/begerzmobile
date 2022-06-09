import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';

interface Props {
  active?: boolean;
  onPress?(): void;
  mainStyle?: StyleProp<ViewStyle>;
  innerStyle?: StyleProp<ViewStyle>;
}

export const Radio = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.main, props.mainStyle]}>
      {props.active && <View style={[styles.inner, props.innerStyle]} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#DADADA'
  },
  inner: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: '#DADADA'
  }
});
