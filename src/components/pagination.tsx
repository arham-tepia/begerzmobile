import React from 'react';
import {FlatList, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface Props {
  activeIndex?: number;
  data?: any;
  style?: StyleProp<ViewStyle>;
}

export const Pagination = (props: Props) => {
  const {data, activeIndex, style} = props;

  function renderDots({index}: any) {
    return (
      <View style={[styles.dot, activeIndex === index && styles.active]} />
    );
  }

  return (
    <FlatList style={style} data={data} renderItem={renderDots} horizontal />
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 8,
    width: 8,
    borderRadius: 8,
    backgroundColor: 'grey',
    marginRight: 1
  },
  active: {
    backgroundColor: 'white'
  }
});
