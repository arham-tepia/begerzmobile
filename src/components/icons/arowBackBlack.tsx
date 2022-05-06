import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ICONS} from '../../constants/icons';

export const ArrowBackBlack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.main}>
      <Image source={ICONS.arrowLeftBlack} style={{height: 18, width: 11}} />
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
