import React, {useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {commonStyles} from '../../../styles/styles';
import {Comment} from './components/comment';
import {CommentInput} from './components/commentInput';

export const BegComments = ({navigation}: any) => {
  // useEffect(() => {
  //   navigation
  //     .getParent()
  //     ?.getParent()
  //     ?.setOptions(
  //       {tabBarStyle: {display: 'none', paddingBottom: 0}},
  //       {safeAreaInsets: {bottom: 0, top: 0}}
  //     );
  //   return () =>
  //     navigation.getParent()?.getParent()?.setOptions({tabBarStyle: undefined});
  // }, [navigation]);
  const data = [
    {
      comment: 'Hello 1'
    },
    {
      comment: 'Hello 2'
    },
    {
      comment: 'Hello 3'
    },
    {
      comment: 'Hello 4'
    },
    {
      comment: 'Hello 5'
    },
    {
      comment: 'Hello 6'
    },
    {
      comment: 'Hello 7'
    },
    {
      comment: 'Hello 8'
    },
    {
      comment: 'Hello 9'
    }
  ];

  function renderComments({item}: any) {
    return <Comment />;
  }

  return (
    <SafeAreaView style={[commonStyles.main]}>
      <View style={{width: '100%'}}>
        <Comment noLike name="Amy" />
        <FlatList
          data={data}
          renderItem={renderComments}
          style={{height: '72%'}}
        />
        <CommentInput />
      </View>
    </SafeAreaView>
  );
};
