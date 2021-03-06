import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';
import {COLORS} from '../constants/colors';
import {FONTS} from '../constants/fonts';

interface Props extends TouchableOpacityProps {
  loading?: boolean;
  title?: string;
  textStyles?: StyleProp<TextStyle>;
  leftComponent?: any;
  inverse?: boolean;
}

export const MyButton = (props: Props) => {
  const {
    loading,
    title,
    textStyles,
    style,
    leftComponent,
    inverse,
    disabled,
    ...rest
  } = props;
  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled}
      style={[
        styles.main,
        inverse && styles.inverse,
        disabled && {backgroundColor: '#a1a1a1'},
        style
      ]}>
      {leftComponent && leftComponent}
      <Text style={[styles.title, inverse && styles.inverseText, textStyles]}>
        {title}
      </Text>
      {loading && (
        <ActivityIndicator
          size="small"
          style={{marginLeft: 10}}
          color="white"
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    flexDirection: 'row'
  },
  title: {
    fontFamily: FONTS.Montserrat_REGULAR,
    fontSize: 14,
    // fontWeight: '500',
    // lineHeight: 16,
    //letterSpacing: 1.25,
    textAlign: 'center',
    color: 'white'
  },
  inverse: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: COLORS.primary
  },
  inverseText: {
    color: COLORS.primary
  }
});
