import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../constants/colors';
import {PlusSVG} from './svgs/plus';

export const TabbarButton = (props: any) => {
  const navigation = props.navigation.navigation;
  const route = props.navigation.route;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(route.name)}
        style={styles.main}>
        <PlusSVG color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 42,
    width: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: COLORS.pink,
  },
  container: {
    backgroundColor: 'white',
    height: 60,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
    borderRadius: 19,
  },
});
