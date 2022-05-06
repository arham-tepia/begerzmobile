import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {COLORS} from '../constants/colors';

interface Props extends TouchableOpacityProps {
  loading?: boolean;
  title?: string;
  textStyles?: StyleProp<TextStyle>;
  leftComponent?: any;
}

export const MyButton = (props: Props) => {
  const {loading, title, textStyles, style, leftComponent, ...rest} = props;
  return (
    <TouchableOpacity {...rest} style={[styles.main, style]}>
      {leftComponent && leftComponent}
      <Text style={[styles.title, textStyles]}>{title}</Text>
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
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 1.25,
    textAlign: 'center',
    color: 'white',
  },
});
