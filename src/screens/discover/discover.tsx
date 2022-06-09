import React from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {FONTS} from '../../constants/fonts';
import {commonStyles} from '../../styles/styles';
import {DiscoverCover} from './components/cover';
import {DiscoverHeader} from './components/discoverHeader';
import {DiscoverTrend} from './components/discoverTrend';

export const Discover = () => {
  return (
    <View style={commonStyles.main}>
      <DiscoverHeader leftComponent={<TextInput style={styles.ti} />} />
      <ScrollView style={{width: '90%', marginTop: 10}}>
        <DiscoverCover />
        <DiscoverTrend />
        <DiscoverTrend />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ti: {
    height: 42,
    borderRadius: 16,
    backgroundColor: '#EEEEEE',
    color: '#171414',
    fontWeight: '600',
    fontFamily: FONTS.M_REGULAR,
    paddingHorizontal: 15
  }
});
