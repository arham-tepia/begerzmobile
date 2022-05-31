import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Image} from 'react-native';
import {MyTextMulish} from '../../../components/textMulish';
import {ICONS} from '../../../constants/icons';
import {Story} from './story';

const SuccessText = () => {
  return (
    <View style={styles.successTextView}>
      <MyTextMulish
        style={{
          fontWeight: '700',
          fontSize: 8,
          transform: [{rotate: '-90deg'}],
          width: 84,
          textAlign: 'center'
        }}>
        SUCCESS STORIES
      </MyTextMulish>
    </View>
  );
};

export const SuccessStories = () => {
  const stories = [
    {name: 'hi'},
    {name: 'hi 1'},
    {name: 'hi 2'},
    {name: 'hi 3'},
    {name: 'hi 4'},
    {name: 'hi 5'},
    {name: 'hi 6'}
  ];

  const renderStories = ({item}: any) => {
    return <Story />;
  };

  return (
    <View style={styles.main}>
      <FlatList
        data={stories}
        renderItem={renderStories}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <SuccessText />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
    backgroundColor: '#FBFAFA'
  },
  successTextView: {
    width: 39,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});
