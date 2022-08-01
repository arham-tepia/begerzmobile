import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ICONS} from '../../constants/icons';

interface Props {
  onPress?(): void;
  disabled?: boolean;
}

export const CalendarIcon = (props: Props) => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      style={styles.main}>
      <Image source={ICONS.calendar} style={{height: 24, width: 24}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
