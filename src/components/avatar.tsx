import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import {ICONS} from '../constants/icons';

interface Props {
  size?: number;
  //upload?: boolean;
  customSize?: boolean;
  source?: any;
  onPress?(): void;
  pressable?: boolean;
  style?: StyleProp<ViewStyle>;
  onLoadStart?(res?: any): void;
  onLoadEnd?(res?: any): void;
}

export const Avatar = (props: Props) => {
  const {size, customSize, source, onPress, pressable} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!pressable}
      style={[
        styles.main,
        styles.ratio,
        customSize && {height: size, width: size, borderRadius: size},
        props.style
      ]}>
      {props.source !== undefined ? (
        <Image
          style={[
            styles.ratio,
            customSize && {height: size, width: size, borderRadius: size},
            //@ts-ignore
            props.style
          ]}
          onLoadStart={props.onLoadStart}
          onLoadEnd={props.onLoadEnd}
          source={source ?? ICONS.user1}
        />
      ) : (
        <Image
          style={[
            styles.ratio,
            customSize && {height: size, width: size, borderRadius: size},
            //@ts-ignore
            props.style
          ]}
          source={ICONS.user1}
        />
      )}
      {/* {( upload) && (
        <View style={[styles.sideIconContainer]}>
          {upload && (
            <Image source={ICONS.user} style={[styles.uploadIcon]} />
          )}
      
        </View>
      )} */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ratio: {
    height: 50,
    width: 50,
    borderRadius: 50
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  uploadIcon: {
    width: 25,
    height: 25
  },
  verifiedIcon: {
    width: 18,
    height: 18
  },
  sideIconContainer: {
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: '-30%'
  }
});
