import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../../constants/colors';
import {FONTS} from '../../../../constants/fonts';
import {ICONS} from '../../../../constants/icons';

interface Props {
  onPress?(): void;
}

export const UploadPhoto = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.main}>
      <Image source={ICONS.uploadPhoto} style={styles.icon} />
      <Text style={styles.text}>Upload Photo</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  main: {
    height: 84,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.lightPink,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderStyle: 'dashed',
    flexDirection: 'row',
  },
  icon: {
    height: 20,
    width: 19.5,
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    color: COLORS.primary,
    fontFamily: FONTS.P_REGULAR,
  },
});
