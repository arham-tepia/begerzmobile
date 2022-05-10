import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

interface Props {
  active?: boolean;
  onPress?(): void;
}

export const Checkbox = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.main}>
      <></>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 18.5,
    width: 18.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderWidth: 1.5,
    borderColor: 'white',
  },
});
