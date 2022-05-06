import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ICONS} from '../../constants/icons';

export const BulbIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => {}} style={styles.main}>
      <Image source={ICONS.bulb} style={{height: 20, width: 14}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 22,
    width: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
