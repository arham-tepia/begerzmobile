import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {RootStateOrAny, useSelector} from 'react-redux';
import {getCommentsForBeg} from '../../../api/beg';
import {postComment} from '../../../api/comments';
import {commonStyles} from '../../../styles/styles';
import {Comment} from './components/comment';
import {CommentInput} from './components/commentInput';

export const BegComments = ({navigation, route}: any) => {
  const [comment, setComment]: any = useState('');
  const [allComments, setAllComments]: any = useState([]);
  const begId = route.params.begId;
  const user = useSelector((state: RootStateOrAny) => state.currentUser);

  async function getData() {
    const res = await getCommentsForBeg(begId);
    setAllComments(res.results);
    console.log(res, 'All comments');
  }
  useEffect(() => {
    getData();
    // navigation
    //   .getParent()
    //   ?.getParent()
    //   ?.setOptions(
    //     {tabBarStyle: {display: 'none', paddingBottom: 0}},
    //     {safeAreaInsets: {bottom: 0, top: 0}}
    //   );
    // return () =>
    //   navigation.getParent()?.getParent()?.setOptions({tabBarStyle: undefined});
  }, [navigation]);

  function renderComments({item}: any) {
    return <Comment data={item} />;
  }

  async function onPostPress() {
    if (comment.length > 1) {
      const data = {
        textDescription: comment,
        htmlDescription: comment,
        begId: begId,
        userId: user.id
      };
      const res = await postComment(data);
      console.log(res, 'Comment response');
      setComment('');
    }
  }

  return (
    <SafeAreaView style={[commonStyles.main]}>
      <View style={{width: '100%'}}>
        <Comment noLike name="Amy" />
        <FlatList
          data={allComments}
          renderItem={renderComments}
          style={{height: '72%'}}
          // ListFooterComponent={() => {
          //   return (
          //     <CommentInput
          //       onChangeText={setComment}
          //       onPostPress={onPostPress}
          //     />
          //   );
          // }}
        />
        <CommentInput onChangeText={setComment} onPostPress={onPostPress} />
      </View>
    </SafeAreaView>
  );
};
