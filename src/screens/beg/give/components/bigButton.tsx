import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {MyTextPoppins} from '../../../../components/textPoppins';
import {COLORS} from '../../../../constants/colors';

interface Props {
  left?: boolean;
  right?: boolean;
  title?: string;
  onPress?(): void;
}

const radius = 5;

export const BugButton = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.main,
        props.left && styles.left,
        props.right && styles.right
      ]}>
      <MyTextPoppins style={{fontSize: 30, color: 'white'}}>
        {props.title}
      </MyTextPoppins>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary
  },
  right: {
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius
  },
  left: {
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius
  }
});
