import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Avatar} from '../../../../components/avatar';
import {ICONS} from '../../../../constants/icons';

interface Props {
  source?: any;
  onPress?(): void;
}

export const MyProfileAvatar = (props: Props) => {
  return (
    <View>
      <View style={styles.main}>
        <Avatar customSize size={115} {...props} pressable />
      </View>
      <View style={styles.up}>
        <Image source={ICONS.upload} style={{height: 24, width: 24}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 123,
    width: 123,
    borderRadius: 123,
    borderWidth: 3,
    borderColor: 'rgba(196, 196, 196, 0.19)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  up: {
    top: 0,
    right: 15,
    position: 'absolute'
  }
});
