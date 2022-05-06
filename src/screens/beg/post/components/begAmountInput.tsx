import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {FONTS} from '../../../../constants/fonts';
import {ICONS} from '../../../../constants/icons';

interface Props extends TextInputProps {
  viewStyle?: StyleProp<ViewStyle>;
}

export const BegAmountInput = (props: Props) => {
  const {
    style,
    keyboardType,
    placeholderTextColor,
    placeholder,
    viewStyle,
    ...rest
  } = props;
  return (
    <View style={[styles.main, viewStyle]}>
      <View style={styles.iconContainer}>
        <Image source={ICONS.dollar} style={styles.dollar} />
      </View>
      <TextInput
        {...rest}
        style={styles.ti}
        keyboardType={'number-pad'}
        placeholder={'0'}
        placeholderTextColor="black"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginVertical: 5,
    borderColor: '#E5E5E5',
  },
  ti: {
    width: '90%',
    textAlign: 'right',
    height: 44,
    fontFamily: FONTS.P_SEMIBOLD,
    fontSize: 20,
  },
  dollar: {width: 10.5, height: 21},
  iconContainer: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
  },
});
