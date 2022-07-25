import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator
} from 'react-native';
import {RootStateOrAny, useSelector} from 'react-redux';
import {getCommentsForBeg} from '../../../api/beg';
import {postComment} from '../../../api/comments';
import {commonStyles} from '../../../styles/styles';
import {Comment} from './components/comment';
import {CommentInput} from './components/commentInput';

export const BegComments = ({navigation, route}: any) => {
  const [comment, setComment]: any = useState('');
  const [allComments, setAllComments]: any = useState([]);
  const [loader, setLoader]: any = useState(false);
  const begId = route.params.begId;
  const user = useSelector((state: RootStateOrAny) => state.currentUser);

  async function getData() {
    setLoader(true);
    const res = await getCommentsForBeg(begId).finally(() => setLoader(false));
    setAllComments(res.results);
    console.log(res, 'All comments');
  }

  useEffect(() => {
    getData();
  }, []);

  // useLayoutEffect(() => {
  //   navigation
  //     .getParent()
  //     ?.getParent()
  //     ?.setOptions(
  //       {
  //         tabBarStyle: {
  //           display: 'none',
  //           aspectRatio: 0,
  //           maxHeight: 0,
  //           height: 0,
  //           padding: 0,
  //           margin: 0
  //           //paddingBottom: 0
  //           //bottom: 0
  //           //height: 0
  //           // width: 0
  //         }
  //       },
  //       {safeAreaInsets: {bottom: 0, top: 0}}
  //     );
  //   return () =>
  //     navigation.getParent()?.getParent()?.setOptions({tabBarStyle: undefined});
  // }, [navigation]);

  function renderComments({item}: any) {
    return <Comment data={item} />;
  }

  async function onPostPress() {
    if (comment.length >= 1) {
      const data = {
        textDescription: comment,
        htmlDescription: comment,
        begId: begId,
        userId: user.id
      };
      const res = await postComment(data);
      console.log(res, 'Comment response');
      setComment('');
      getData();
    }
  }
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 0;

  return (
    <SafeAreaView style={[commonStyles.main]}>
      {loader && <ActivityIndicator />}
      <KeyboardAvoidingView
        keyboardVerticalOffset={keyboardVerticalOffset}
        behavior="padding"
        style={{width: '100%'}}>
        <FlatList
          data={allComments}
          renderItem={renderComments}
          style={{height: '90%'}}
        />
        {/* <CommentInput
          onChangeText={setComment}
          onPostPress={onPostPress}
          value={comment}
        /> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
