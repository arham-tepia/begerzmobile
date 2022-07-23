import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {RootStateOrAny, useSelector} from 'react-redux';
import {postComment} from '../../../api/comments';
import {getUserInformationById} from '../../../api/user';
import {Avatar} from '../../../components/avatar';
import {StarColored} from '../../../components/icons/starColored';
import {MyButton} from '../../../components/myButton';
import {MyTextInput} from '../../../components/myTextinput';
import {MyTextMontserrat} from '../../../components/textMontserrat';
import {MyTextMulish} from '../../../components/textMulish';
import {MyTextPoppins} from '../../../components/textPoppins';
import {COLORS} from '../../../constants/colors';
import {FONTS} from '../../../constants/fonts';
import {commonStyles} from '../../../styles/styles';
import {BegHeadings} from '../post/components/begHeadings';

export const ChipinComment = ({route, navigation}: any) => {
  const [user, setUser]: any = useState([]);
  const [loader, setLoader]: any = useState(false);
  const state = useSelector((state: RootStateOrAny) => state.currentUser);
  const [comment, setComment]: any = useState('');
  const [commentResponse, setCommentResponse]: any = useState([]);
  const beg = route.params.beg;

  async function GetData() {
    const u = await getUserInformationById(state.id);
    setUser(u);
  }

  useEffect(() => {
    GetData();
  }, []);

  async function onPostPress() {
    if (comment.length >= 1) {
      setLoader(true);
      const data = {
        textDescription: comment,
        htmlDescription: comment,
        begId: beg._id,
        userId: state.id
      };
      const res = await postComment(data).finally(() => setLoader(false));
      console.log(res, 'Comment response');
      setCommentResponse(res);
      setComment('');
    }
  }

  function renderComment() {
    return (
      <View
        style={{
          width: '100%',
          minHeight: 50,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: COLORS.lightPink,
          padding: 10,
          borderRadius: 8
        }}>
        <View style={{alignSelf: 'flex-start'}}>
          <Avatar
            customSize
            size={48}
            source={user?.profileImage && {uri: user.profileImage}}
          />
        </View>
        <MyTextMulish style={{width: '80%'}}>
          {commentResponse.textDescription}
        </MyTextMulish>
      </View>
    );
  }

  return (
    <View style={commonStyles.main}>
      <View style={{marginTop: 20}} />
      <BegHeadings style={{fontFamily: FONTS.P_SEMIBOLD, color: '#000000'}}>
        Comment on this beg {loader && <ActivityIndicator />}
      </BegHeadings>
      <View style={{width: '90%', marginTop: 16}}>
        {commentResponse._id ? (
          renderComment()
        ) : (
          <>
            <MyTextInput
              style={styles.ti}
              containerStyle={{borderRadius: 8, height: 48}}
              placeholder="Enter Comment here"
              onChangeText={setComment}
              value={comment}
            />
            <View style={{width: '40%', alignSelf: 'center', marginTop: 16}}>
              <MyButton
                title="POST"
                textStyles={{
                  fontFamily: FONTS.M_REGULAR,
                  fontWeight: '700',
                  fontSize: 13
                }}
                loading={loader}
                onPress={onPostPress}
              />
            </View>
          </>
        )}
        <View style={styles.userView}>
          <Avatar
            customSize
            size={48}
            source={user?.profileImage && {uri: user.profileImage}}
          />
          <View style={{marginLeft: 14}}>
            <MyTextMontserrat style={styles.subtitle}>
              You are commenting as:
            </MyTextMontserrat>
            <MyTextMontserrat style={styles.name}>
              {user?.firstName} {user?.lastName}
            </MyTextMontserrat>
          </View>
        </View>
        <View style={[styles.userView, {marginTop: 40}]}>
          <StarColored />
          <View style={{marginLeft: 7}}>
            <MyTextMontserrat style={{fontWeight: '500', fontSize: 16}}>
              Thanks for chipping in!
            </MyTextMontserrat>
            <MyTextMontserrat style={{fontWeight: '600', fontSize: 16}}>
              +2 KarmaPoints!
            </MyTextMontserrat>
          </View>
        </View>
        <View style={{marginTop: 41}} />

        <MyButton
          title="CONTINUE"
          textStyles={{
            fontFamily: FONTS.P_REGULAR,
            fontWeight: '600',
            letterSpacing: 0
          }}
          onPress={() => navigation.navigate('home')}
          style={{height: 48, borderRadius: 24}}
        />
        <MyTextPoppins
          onPress={() => navigation.navigate('bn-accounts')}
          style={styles.skipText}>
          Skip, View Beg Dashboard
        </MyTextPoppins>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 16,
    color: '#3b3e44'
  },
  name: {
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
    marginTop: 3
  },
  skipText: {
    color: COLORS.primary,
    fontSize: 12,
    textAlign: 'center',
    textDecorationColor: COLORS.primary,
    textDecorationLine: 'underline',
    marginTop: 16
  },
  ti: {
    height: 48
  }
});
