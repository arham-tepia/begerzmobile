import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import {RootStateOrAny, useSelector} from 'react-redux';
import {sendInvitation} from '../../../api/invitations';
import {getListOfFollowersForUser} from '../../../api/user';
import {MyButton} from '../../../components/myButton';
import {MyTextInput} from '../../../components/myTextinput';
import {MyTextPoppins} from '../../../components/textPoppins';
import {COLORS} from '../../../constants/colors';
import {FONTS} from '../../../constants/fonts';
import {commonStyles} from '../../../styles/styles';
import {BegHeadings} from './components/begHeadings';
import {FollowerComponent} from './components/follwerComponent';
import Toast from 'react-native-toast-message';

export const ShareBegWithFollowers = ({navigation, route}: any) => {
  var subtext = 'We recommend asking least 3-5 firends to help you share';
  var subtext1 = 'sharing on a social network can raise up to 5x more!';
  const [selectedFollowers, setSelectedFollowers]: any = useState([]);
  const [followers, setFollowers]: any = useState([]);
  const [loader, setLoader]: any = useState(false);
  const beg = route.params.beg;
  const user = useSelector((state: RootStateOrAny) => state.currentUser);
  console.log(beg, 'My Beg');

  const [emails, setEmails]: any = useState([]);

  useEffect(() => {
    GetFollowers();
  }, []);

  async function GetFollowers() {
    setLoader(true);
    const res = await getListOfFollowersForUser(user.id).finally(() =>
      setLoader(false)
    );
    setFollowers(res.results);
  }
  function renderFollowers({item}: any) {
    return (
      <FollowerComponent
        onPress={() => onFollowerSelect(item)}
        name={item.name}
        data={item}
        active={searchInArrayOfObjectsWithID(
          item.followerId,
          selectedFollowers
        )}
      />
    );
  }
  function onFollowerSelect(item: any) {
    if (searchInArrayOfObjectsWithID(item.followerId, selectedFollowers)) {
      var res = removeItemOnceFromArray(item, selectedFollowers);
      setSelectedFollowers(res);
    } else {
      setSelectedFollowers([...selectedFollowers, item]);
    }
  }

  async function sendInvitations(item: any) {
    await sendInvitation({
      email: item.user.email,
      userId: user.id,
      inviteeId: item.followerId,
      begId: beg._id
    });
  }
  async function sendEmailInvitations(email: any) {
    const res = await sendInvitation({
      email: email.trim(),
      userId: user.id,
      begId: beg._id
    });
    if (res.errors) {
      Toast.show({
        type: 'error',
        text1: res.errors[0].msg,
        text2: 'Invalid Email address: ' + email
      });
    }
    if (res._id) {
      Toast.show({
        type: 'success',
        text1: 'Successfully Sent!'
      });
    }
  }

  async function onSharePress() {
    if (selectedFollowers.length >= 1) {
      setLoader(true);
      const data = selectedFollowers.map((el: any) => sendInvitations(el));
      const output = await Promise.all(data).finally(() => setLoader(false));
      Toast.show({
        type: 'success',
        text1: 'Invitations sent successfully'
      });
    }
    if (emails.length > 1) {
      const allEmails = emails.split(',');
      setLoader(true);
      const data = allEmails.map((el: any) => sendEmailInvitations(el));
      const output = await Promise.all(data).finally(() => setLoader(false));
      setEmails('');
    }
  }

  function searchInArrayOfObjectsWithID(id: string, myArray: any) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].followerId === id) {
        return true;
      }
    }
    return false;
  }

  function removeItemOnceFromArray(value: any, arr: any) {
    var newArr = arr.filter((item: any) => item.followerId != value.followerId);
    return newArr;
  }

  return (
    <>
      <TouchableWithoutFeedback>
        <View style={commonStyles.main}>
          <ScrollView style={{width: '100%'}}>
            <View style={{width: '90%', marginTop: 10, alignSelf: 'center'}}>
              <BegHeadings
                style={{
                  textAlign: 'center',
                  fontFamily: FONTS.P_SEMIBOLD,
                  color: '#000000'
                }}>
                Share your beg
              </BegHeadings>
              <MyTextPoppins
                style={[
                  styles.subHeading,
                  {
                    marginTop: 10,
                    width: '90%',
                    alignSelf: 'center'
                  }
                ]}>
                {subtext}
              </MyTextPoppins>
              <MyTextPoppins
                style={[
                  styles.subHeading,
                  {width: '95%', alignSelf: 'center'}
                ]}>
                {subtext1}
              </MyTextPoppins>
              <View style={{marginTop: 15, width: '100%'}}>
                <MyTextPoppins style={styles.heading}>
                  Select Followers to Share With:
                </MyTextPoppins>
              </View>
              <View style={{width: '90%', alignSelf: 'center'}}>
                {/* {followers.map(renderFollowers)} */}
                <FlatList
                  data={followers}
                  renderItem={renderFollowers}
                  scrollEnabled={false}
                />
              </View>
              <MyTextPoppins
                style={{
                  fontFamily: FONTS.P_SEMIBOLD,
                  fontSize: 12,
                  color: '#3B3E44',
                  marginTop: 10
                }}>
                Invite Users
              </MyTextPoppins>
              <MyTextInput
                containerStyle={styles.ti}
                placeholder="Email Address"
                onChangeText={setEmails}
                value={emails}
              />
              <MyTextPoppins
                style={{
                  fontFamily: FONTS.P_REGULAR,
                  fontSize: 10,
                  color: '#7B7B7B',
                  width: '95%',
                  textAlign: 'left',
                  alignSelf: 'center'
                }}>
                Enter each email address with a comma separation
              </MyTextPoppins>
              <View
                style={{
                  width: '40%',
                  marginTop: 30,
                  alignItems: 'center',
                  alignSelf: 'center'
                }}>
                <MyButton
                  title="Share"
                  loading={loader}
                  onPress={onSharePress}
                  textStyles={{
                    fontFamily: FONTS.P_REGULAR,
                    fontSize: 16,
                    alignSelf: 'center',
                    letterSpacing: 0,
                    fontWeight: '600'
                  }}
                />
              </View>
              <View style={{marginTop: 20}} />
              <MyTextPoppins
                style={{color: '#3b3e44', fontFamily: FONTS.P_REGULAR}}>
                Finished Sharing?
              </MyTextPoppins>
              <View style={{marginTop: 10}} />
              <MyButton
                style={{height: 48, borderRadius: 24}}
                title="NEXT"
                textStyles={{
                  fontFamily: FONTS.P_REGULAR,
                  fontWeight: '600',
                  letterSpacing: 0
                }}
                onPress={() => navigation.navigate('shareOnSocial', {beg: beg})}
              />
              <View style={{marginTop: 10}} />
              <MyTextPoppins
                onPress={() => navigation.navigate('bn-accounts')}
                style={styles.skipText}>
                Skip,View Beg Dashboard
              </MyTextPoppins>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
      <Toast position="bottom" />
    </>
  );
};

const styles = StyleSheet.create({
  subHeading: {
    color: '#28383E',
    lineHeight: 20,
    opacity: 0.8,
    textAlign: 'center'
  },
  heading: {
    color: '#000000',
    fontFamily: FONTS.P_MEDIUM,
    lineHeight: 22
  },
  ti: {
    borderRadius: 8,
    borderColor: 'rgba(40,56,61,0.8)'
  },
  skipText: {
    color: COLORS.primary,
    fontSize: 12,
    textAlign: 'center',
    textDecorationColor: COLORS.primary,
    textDecorationLine: 'underline'
  }
});
