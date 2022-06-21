import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import {COLORS} from '../constants/colors';
import {ICONS} from '../constants/icons';

interface Props extends TextInputProps {
  rightComponent?: any;
  label?: string;
  focused?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  rightComponentStyles?: StyleProp<ViewStyle>;
  ref?: any;
}

export const MyTextInput = (props: Props) => {
  const {
    rightComponent,
    label,
    focused,
    secureTextEntry,
    style,
    containerStyle,
    onFocus,
    onBlur,
    ...rest
  } = props;
  const [state, setState]: any = useState(false);
  const [secure, setSecure]: any = useState(true);
  useEffect(() => {
    secureTextEntry ? setSecure(true) : setSecure(false);
  }, []);
  return (
    <View
      style={[
        styles.container,
        (focused || state) && styles.highlightedContainer,
        containerStyle
      ]}>
      {label && (
        <View style={styles.labelContainer}>
          <Text
            style={[
              styles.label,
              (focused || state) && {color: COLORS.primary}
            ]}>
            {label}
          </Text>
        </View>
      )}
      <TextInput
        ref={props.ref}
        style={[
          styles.textInput,
          rightComponent || secureTextEntry ? {width: '75%'} : {width: '90%'},
          style
        ]}
        placeholderTextColor="#00000061"
        onFocus={(s: any) => {
          setState(true);
          onFocus && onFocus(s);
        }}
        onBlur={e => {
          setState(false);
          onBlur && onBlur(e);
        }}
        secureTextEntry={secure}
        {...rest}
      />
      {(rightComponent || secureTextEntry) && (
        <View style={[styles.iconContainer, props.rightComponentStyles]}>
          {rightComponent}
          {secureTextEntry && (
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              {secure ? (
                <Image source={ICONS.eyeClose} style={styles.eyeClose} />
              ) : (
                <Image source={ICONS.eyeOpen} style={styles.eyeOpen} />
              )}
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 54,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#00000061',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    marginVertical: 5
  },
  labelContainer: {
    position: 'absolute',
    backgroundColor: '#FFF',
    top: -10,
    left: 18,
    zIndex: 50
  },
  textInput: {
    minHeight: 24,
    width: '80%',
    color: '#000000DE'
  },
  iconContainer: {
    width: '15%',
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  label: {
    color: '#28383ECC',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    fontWeight: '400'
  },
  highlightedContainer: {
    borderColor: COLORS.primary
  },
  eyeClose: {
    height: 24,
    width: 24
  },
  eyeOpen: {
    height: 15,
    width: 22
  }
});
