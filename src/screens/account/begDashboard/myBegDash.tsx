import React, {useEffect, useRef, useState} from 'react';
import {Margin} from '../../../components/margin';
import {MyButton} from '../../../components/myButton';
import {MyTextInput} from '../../../components/myTextinput';
import {MyTextMulish} from '../../../components/textMulish';
import {COLORS} from '../../../constants/colors';
import {FONTS} from '../../../constants/fonts';
import {ICONS} from '../../../constants/icons';
import {BottomCard} from '../../../components/bottomCard';
import {Video} from 'expo-av';
import ImagePicker from 'react-native-image-crop-picker';
import {putFile} from '../../../api/uploadFIle';
import {getSignedURL} from '../../../api/signedUrl';
import Toast from 'react-native-toast-message';
import {MEDIA_URL} from '../../../api/url';
import {deleteVideo, postVideo} from '../../../api/video';
import {createSuccessStory} from '../../../api/success';
import {RootStateOrAny, useSelector} from 'react-redux';
import {FollowerComponent} from '../../beg/post/components/follwerComponent';
import {HomeBeg} from '../../home/components/homeBeg';
import {BegInformationView} from './components/begInformationView';
import {CollapseableView} from './components/collapsableView';
import {Dropdown} from './components/dropdown';
import {EndAndWithdraw} from './components/withdraw';
import {FlatList, Image, ScrollView, StyleSheet, View} from 'react-native';
//@ts-ignore
import MentionHashtagTextView from 'react-native-mention-hashtag-text';
import {ConvertDateStringToObject} from '../../../helpers/formatDateObject';
import {getListOfFollowersForUser, getUserPaymethods} from '../../../api/user';
import {sendInvitation} from '../../../api/invitations';
import {withdrawMoney} from '../../../api/withdraw';
import {MyTextPoppins} from '../../../components/textPoppins';

export const MyBegDashboard = ({route}: any) => {
  const [videos, setVideos]: any = useState([]);
  const [loader, setLoader]: any = useState(false);
  const [showOpenOptions, setShowOpenOptions]: any = useState(false);
  const [fileObj, setFileObj]: any = useState(false);
  const [storyFileObj, setStoryFileObj]: any = useState(false);
  const [story, setStory]: any = useState('');
  const [emails, setEmails]: any = useState('');
  const [selectedFollowers, setSelectedFollowers]: any = useState([]);
  const [followers, setFollowers]: any = useState([]);
  const [paymethod, setPaymethod]: any = useState([]);
  const [storyCard, setStoryCard] = useState(false);
  const [withdrawModal, setWithdrawModal]: any = useState(false);
  const [withdrawnSuccess, setWithdrawnSuccess]: any = useState(false);

  const beg = route.params.beg;
  const scrollRef: any = useRef();
  const begCreated = ConvertDateStringToObject(beg.createdAt);
  const begGoalDate = ConvertDateStringToObject(beg.goalDate);
  const user = useSelector((state: RootStateOrAny) => state.currentUser);

  useEffect(() => {
    const beg = route.params.beg;
    console.log(beg, 'Opened Beg');

    setVideos(beg.videos);
    GetFollowers();
    GetPayMethod();
  }, []);

  // ----------------

  async function onWithDrawPress(data: any) {
    setLoader(true);
    const res = await withdrawMoney(data).finally(() => setLoader(false));
    setWithdrawModal(false);
    if (res._id) {
      setWithdrawnSuccess(true);
      Toast.show({
        type: 'success',
        text1: 'Your funds are on your way!'
      });
    }
    if (res.message) {
      Toast.show({
        type: 'error',
        text1: res.message
      });
    }
  }

  async function GetPayMethod() {
    setLoader(true);
    const res = await getUserPaymethods(user.id).finally(() =>
      setLoader(false)
    );
    console.log(res, 'response paymethod');
    if (res.results) {
      if (res.results.length >= 1) {
        setPaymethod(res.results[0]);
      }
    }
  }

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

  // ----------------

  async function onVideoPick() {
    ImagePicker.openPicker({
      mediaType: 'video',
      compressVideoPreset: 'MediumQuality'
    }).then(video => {
      setShowOpenOptions(false);
      setFileObj(video);
      processVideo(video);
    });
  }

  async function onStoryVideoPick() {
    ImagePicker.openPicker({
      mediaType: 'video',
      compressVideoPreset: 'MediumQuality'
    }).then(video => {
      setShowOpenOptions(false);
      setStoryFileObj(video);
    });
  }

  async function onOpenCamera() {
    ImagePicker.openCamera({
      mediaType: 'video',
      compressVideoPreset: 'MediumQuality'
    }).then(video => {
      setShowOpenOptions(false);
      setFileObj(video);
      processVideo(video);
    });
  }

  async function processVideo(fileObj: any) {
    setLoader(true);
    const res = await getSignedURL('');
    await putFile(res, fileObj).finally(() => {
      setLoader(false);
      Toast.show({
        type: 'success',
        text1: 'Upload successful',
        text2: 'Your video has been uploaded successfully'
      });
    });

    const link = await postVideo({
      videoLink: res.uuid ? MEDIA_URL + res.uuid + '.mp4' : '',
      thumbLink: res.uuid
        ? MEDIA_URL + 'thumbs/' + res.uuid + '-00001.png'
        : '',
      videoType: 'beg',
      fileId: res.uuid,
      begId: beg._id
    });
  }

  async function onBegRemove(item: any) {
    const res = await deleteVideo(item._id);
    // console.log(res, 'Video Deleted');
    Toast.show({
      type: 'success',
      text1: 'Video removed successfully'
    });
    deleteItemById(item._id);
  }

  const deleteItemById = (id: any) => {
    const filteredData = videos.filter((item: any) => item._id !== id);
    setVideos(filteredData);
  };

  async function onShareSuccessStory() {
    if (storyFileObj.path && story.length > 1) {
      setLoader(true);
      const res = await getSignedURL('');
      await putFile(res, storyFileObj).finally(() => {
        setLoader(false);
        Toast.show({
          type: 'success',
          text1: 'Upload successful',
          text2: 'Your video has been uploaded successfully'
        });
      });

      const link = await createSuccessStory({
        videoLink: res.uuid ? MEDIA_URL + res.uuid + '.mp4' : '',
        thumbLink: res.uuid
          ? MEDIA_URL + 'thumbs/' + res.uuid + '-00001.png'
          : '',
        fileId: res.uuid,
        begId: beg._id,
        textDescription: story,
        htmlDescription: story,
        localFileName: fileObj.fileName,
        userId: user.id
      });
      if (link._id) {
        Toast.show({
          type: 'success',
          text1: 'Success story posted'
        });
        setStoryFileObj([]);
        setStory('');
      }
    }
  }

  return (
    <>
      <View style={styles.main}>
        <ScrollView ref={scrollRef} style={{width: '100%'}}>
          <View style={{alignItems: 'center', width: '100%'}}>
            <Margin top margin={0} />
            <HomeBeg noGradient data={beg} hideUser transparent />
            <View style={styles.card}>
              <View style={styles.cardTop}>
                <View
                  style={[
                    styles.topInner,
                    {borderRightWidth: 0.5, borderColor: '#dedede'}
                  ]}>
                  <Margin top margin={21} />
                  <MyTextMulish style={styles.heading}>
                    Beg Complete
                  </MyTextMulish>
                  <Margin top margin={10} />
                  <MyTextMulish style={[styles.desc, {fontSize: 16}]}>
                    {begCreated.month} {begCreated.date} - {begGoalDate.month}{' '}
                    {begGoalDate.date}
                  </MyTextMulish>
                  <Margin top margin={20} />

                  <View
                    style={{flexDirection: 'row', minHeight: 31, width: '90%'}}>
                    <View
                      style={{
                        borderRightWidth: 0.5,
                        borderColor: '#dedede',
                        width: '50%',
                        alignItems: 'center'
                      }}>
                      <MyTextMulish style={styles.statTxt}>
                        {beg.donors}
                      </MyTextMulish>
                      <MyTextMulish style={[styles.statTxt, {color: 'grey'}]}>
                        Donors
                      </MyTextMulish>
                    </View>
                    <View
                      style={{
                        width: '50%',
                        alignItems: 'center'
                      }}>
                      <MyTextMulish style={styles.statTxt}>
                        {beg.shares}
                      </MyTextMulish>
                      <MyTextMulish style={[styles.statTxt, {color: 'grey'}]}>
                        Shares
                      </MyTextMulish>
                    </View>
                  </View>
                  <Margin top margin={21} />

                  <MyButton
                    style={{width: '90%'}}
                    disabled={
                      beg.fundsWithdrawn || withdrawnSuccess ? true : false
                    }
                    onPress={() => setWithdrawModal(true)}
                    title={
                      beg.fundsWithdrawn || withdrawnSuccess
                        ? 'Funds Withdrawn'
                        : 'End & Withdraw funds'
                    }
                    textStyles={{
                      fontFamily: FONTS.M_REGULAR,
                      fontWeight: '700',
                      fontSize: 13
                    }}
                  />
                  <Margin top margin={11} />
                </View>
                <View style={styles.topInner}>
                  <Margin top margin={21} />
                  <MyTextMulish style={styles.heading}>
                    Success Story
                  </MyTextMulish>
                  <Margin top margin={10} />

                  <MyTextMulish
                    numberOfLines={5}
                    onPress={() => setStoryCard(true)}
                    style={[
                      styles.desc,
                      {
                        textAlign: 'center',
                        width: '60%'
                      }
                    ]}>
                    Submit a Success Story to be featured in Begerz Community!
                  </MyTextMulish>
                  {/* <Margin top margin={13} /> */}

                  <MyButton
                    style={{width: '90%', position: 'absolute', bottom: 11}}
                    title="Share My Story"
                    inverse
                    onPress={() => scrollRef.current.scrollToEnd()}
                    textStyles={{
                      fontFamily: FONTS.M_REGULAR,
                      fontWeight: '700',
                      fontSize: 13
                    }}
                  />
                  <Margin top margin={11} />
                </View>
              </View>
              <View
                style={{
                  height: 59,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomWidth: 1,
                  width: '100%',
                  borderColor: 'rgba(222, 222, 222, 1)'
                }}>
                <MyTextPoppins
                  style={[{color: 'grey', fontSize: 12, fontWeight: '500'}]}>
                  Funds may take 5-7 business days to process
                </MyTextPoppins>
              </View>
              <CollapseableView title="General" hand>
                <BegInformationView beg={beg} />
                <FlatList
                  data={videos}
                  style={{width: '95%'}}
                  renderItem={({item}: any) => {
                    return (
                      <View style={{width: '95%', alignSelf: 'center'}}>
                        <Image
                          source={{uri: item.thumbLink}}
                          style={{height: 285, width: '100%'}}
                        />
                        <MyTextMulish
                          onPress={() => onBegRemove(item)}
                          style={[
                            {
                              fontWeight: '700',
                              marginVertical: 3,
                              alignSelf: 'flex-end'
                            },
                            {fontSize: 13, color: COLORS.primary}
                          ]}>
                          Remove
                        </MyTextMulish>
                      </View>
                    );
                  }}
                />

                <Margin top margin={10} />
                <MyButton
                  title="+ Add Video"
                  loading={loader}
                  onPress={onVideoPick}
                  disabled={loader}
                  inverse
                  style={{height: 44, borderRadius: 100, width: '95%'}}
                  textStyles={{fontWeight: '700', fontSize: 13}}
                />
                <Margin top margin={10} />
              </CollapseableView>
              <CollapseableView title="Story" edit>
                <View style={{width: '95%', marginTop: 25}}>
                  <MyTextMulish style={styles.storyText}>
                    {'Tell your story'}
                  </MyTextMulish>
                  <MyTextMulish
                    style={[
                      styles.storySubText,
                      {marginTop: 11, marginBottom: 8}
                    ]}>
                    {'Explain who you are and why are you creating this beg.'}
                  </MyTextMulish>
                  <MyTextInput
                    containerStyle={styles.tiContainer}
                    style={styles.ti}
                    multiline
                    blurOnSubmit
                    defaultValue={beg.textDescription}
                  />
                  <View style={{marginBottom: 35}} />
                </View>
              </CollapseableView>
              <CollapseableView title="Invitations" golf>
                <View style={{width: '95%', marginTop: 25}}>
                  <MyTextMulish style={styles.storyText}>
                    {'Share with'}
                  </MyTextMulish>
                  <View style={{marginLeft: 10}}>
                    <FlatList data={followers} renderItem={renderFollowers} />
                  </View>
                  <MyTextMulish style={[styles.storyText, {marginTop: 18}]}>
                    {'Invite Users'}
                  </MyTextMulish>
                  <MyTextInput
                    placeholder="Email Address"
                    containerStyle={{borderRadius: 8}}
                    value={emails}
                    onChangeText={setEmails}
                  />
                  <MyTextMulish style={[styles.storySubText, {marginLeft: 10}]}>
                    {'Enter each email with a comma separation'}
                  </MyTextMulish>
                  <Margin top margin={29} />
                  <MyButton
                    title="Send Invitations"
                    onPress={onSharePress}
                    style={{width: '70%', alignSelf: 'center'}}
                    textStyles={{
                      fontWeight: '600',
                      fontFamily: FONTS.P_REGULAR,
                      fontSize: 16
                    }}
                  />
                  <Margin top margin={35} />
                </View>
              </CollapseableView>
              <CollapseableView title="Success Story" edit>
                <View style={{width: '95%', marginTop: 25}}>
                  <MyTextMulish style={styles.storyText}>
                    {'Share your success!'}
                  </MyTextMulish>
                  <MyTextMulish
                    style={[
                      styles.storySubText,
                      {marginTop: 11, marginBottom: 12}
                    ]}>
                    {
                      'Explain how you would like to thanks others for this success.'
                    }
                  </MyTextMulish>
                  <MyTextInput
                    containerStyle={styles.tiContainer}
                    style={styles.ti}
                    multiline
                    blurOnSubmit
                    onChangeText={setStory}
                    value={story}
                  />
                  <View style={{marginBottom: 35}} />
                  {!storyFileObj.path && (
                    <Image
                      source={ICONS.noimage}
                      style={{height: 285, width: '100%'}}
                    />
                  )}
                  {storyFileObj.path && (
                    <Video
                      style={{
                        width: '100%',
                        marginBottom: 10,
                        // aspectRatio: 1,
                        borderRadius: 5,
                        height: 285
                      }}
                      source={{
                        uri: storyFileObj.path
                      }}
                      useNativeControls
                      // resizeMode={ResizeMode.COVER}
                      onReadyForDisplay={response => {}}
                    />
                  )}
                  {storyFileObj.path && (
                    <MyTextMulish
                      onPress={() => setStoryFileObj([])}
                      style={{
                        color: COLORS.primary,
                        alignSelf: 'flex-end',
                        fontWeight: '700',
                        marginTop: 4,
                        marginBottom: 25
                      }}>
                      Remove
                    </MyTextMulish>
                  )}
                  <MyButton
                    title="+ Add Video"
                    inverse
                    loading={loader}
                    onPress={onStoryVideoPick}
                    disabled={loader}
                    style={{height: 44, borderRadius: 100, marginTop: 35}}
                    textStyles={{fontWeight: '700', fontSize: 13}}
                  />
                  <Margin top margin={25} />

                  <MyButton
                    style={{width: '100%', height: 44, borderRadius: 100}}
                    onPress={onShareSuccessStory}
                    title="SHARE"
                    textStyles={{
                      fontFamily: FONTS.M_REGULAR,
                      fontWeight: '700',
                      fontSize: 13
                    }}
                  />
                  <View style={{marginBottom: 35}} />
                </View>
              </CollapseableView>
              <CollapseableView title="Donors" bell></CollapseableView>
            </View>
          </View>
        </ScrollView>
      </View>
      <EndAndWithdraw
        visible={withdrawModal}
        userId={user.id}
        beg={beg}
        paymethod={paymethod}
        loader={loader}
        onWithDrawPress={onWithDrawPress}
        onCancelPress={() => setWithdrawModal(false)}
      />
      <BottomCard
        topViewStyle={{height: '70%'}}
        contentContainerStyles={{
          height: '30%',
          paddingTop: '5%',
          alignItems: 'center'
        }}
        visible={storyCard}
        onCancelPress={() => setStoryCard(false)}>
        <MyTextMulish style={[styles.desc, {width: '90%'}]}>
          <MentionHashtagTextView mentionHashtagColor={COLORS.primary}>
            {beg.textDescription}
          </MentionHashtagTextView>
        </MyTextMulish>
      </BottomCard>
      <Dropdown />
      <Toast position="bottom" />
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center'
  },
  card: {
    width: '90%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 30
  },
  cardTop: {
    width: '100%',
    height: 203,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'rgba(222, 222, 222, 1)'
  },
  topInner: {
    width: '50%',
    alignItems: 'center',
    height: '100%'
  },
  heading: {
    fontWeight: '700',
    color: '#000000'
  },
  desc: {
    fontSize: 14,
    fontWeight: '500',
    color: '#979797'
  },
  statTxt: {
    fontWeight: '700',
    fontSize: 16
  },
  tiContainer: {
    height: 180,
    borderRadius: 4,
    borderWidth: 1.25,
    borderColor: '#28383ECC'
  },
  ti: {
    fontFamily: FONTS.M_REGULAR,
    fontSize: 10,
    height: 170
  },
  storyText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '700'
  },
  storySubText: {
    color: 'rgba(40, 56, 62, 0.8)',
    fontSize: 12
  }
});
