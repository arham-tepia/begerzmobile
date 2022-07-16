import React, {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, View} from 'react-native';
import {Margin} from '../../../components/margin';
import {MyButton} from '../../../components/myButton';
import {MyTextInput} from '../../../components/myTextinput';
import {MyTextMulish} from '../../../components/textMulish';
import {COLORS} from '../../../constants/colors';
import {FONTS} from '../../../constants/fonts';
import {ICONS} from '../../../constants/icons';
import {
  removeItemOnceFromArray,
  searchInArrayOfObjectsWithID
} from '../../../helpers/searchInArrayOfObjects';
import {FollowerComponent} from '../../beg/post/components/follwerComponent';
import {HomeBeg} from '../../home/components/homeBeg';
import {BegInformationView} from './components/begInformationView';
import {CollapseableView} from './components/collapsableView';
import {Dropdown} from './components/dropdown';
import {EndAndWithdraw} from './components/withdraw';
//@ts-ignore
import MentionHashtagTextView from 'react-native-mention-hashtag-text';
import {BottomCard} from '../../../components/bottomCard';
import {Video, ResizeMode} from 'expo-av';
import ImagePicker from 'react-native-image-crop-picker';
import {putFile} from '../../../api/uploadFIle';
import {getSignedURL} from '../../../api/signedUrl';
import Toast from 'react-native-toast-message';
import {MEDIA_URL} from '../../../api/url';
import {deleteVideo, postVideo} from '../../../api/video';

export const MyBegDashboard = ({route}: any) => {
  const beg = route.params.beg;
  console.log(beg, 'Beg data');
  const [videos, setVideos]: any = useState([]);
  useEffect(() => {
    const beg = route.params.beg;

    setVideos(beg.videos);
  }, []);
  // const [signedUrl, setSignedUrl]: any = useState([]);
  const [loader, setLoader]: any = useState(false);
  const [showOpenOptions, setShowOpenOptions]: any = useState(false);
  const [fileObj, setFileObj]: any = useState(false);

  const [storyCard, setStoryCard] = useState(false);
  const [withdrawModal, setWithdrawModal]: any = useState(false);
  const [selectedFollowers, setSelectedFollowers]: any = useState([]);
  const followers = [
    {name: 'john_doe', id: '1'},
    {name: 'jone_doe', id: '2'},
    {name: 'jake_doe', id: '3'}
  ];
  function renderFollowers(item: any) {
    return (
      <FollowerComponent
        onPress={() => onFollowerSelect(item)}
        name={item.name}
        active={searchInArrayOfObjectsWithID(item.id, selectedFollowers)}
      />
    );
  }
  function onFollowerSelect(item: any) {
    if (searchInArrayOfObjectsWithID(item.id, selectedFollowers)) {
      var res = removeItemOnceFromArray(item, selectedFollowers);
      setSelectedFollowers(res);
    } else {
      setSelectedFollowers([...selectedFollowers, item]);
    }
  }
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
    const res = await getSignedURL();
    // setSignedUrl(res);
    await putFile(res, fileObj).finally(() => {
      setLoader(false);
      Toast.show({
        type: 'success',
        text1: 'Upload successful',
        text2: 'Your video has been uploaded successfully'
      });
    });

    // const video = {
    //   videoLink: res.uuid ? MEDIA_URL + res.uuid + '.mp4' : '',
    //   thumbLink: res.uuid ? MEDIA_URL + res.uuid + '-00001.png' : '',
    //   videoType:'beg',
    //   fileId:res.uuid,
    //   begId:beg._id
    // };

    const link = await postVideo({
      videoLink: res.uuid ? MEDIA_URL + res.uuid + '.mp4' : '',
      thumbLink: res.uuid
        ? MEDIA_URL + 'thumbs/' + res.uuid + '-00001.png'
        : '',
      videoType: 'beg',
      fileId: res.uuid,
      begId: beg._id
    });
    console.log(link, 'Video Linked response');
  }

  function onMediaRemove() {
    setFileObj(false);
    // setSignedUrl([]);
  }

  async function onBegRemove(item: any) {
    console.log(item);

    const res = await deleteVideo(item._id);
    console.log(res, 'Video Deleted');
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

  return (
    <>
      <View style={styles.main}>
        <ScrollView style={{width: '100%'}}>
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
                    Oct 17 - Oct 29
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
                    onPress={() => setWithdrawModal(true)}
                    title="Withdraw funds"
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
                    numberOfLines={3}
                    onPress={() => setStoryCard(true)}
                    style={[
                      styles.desc,
                      {textAlign: 'center', width: '60%', height: 87}
                    ]}>
                    <MentionHashtagTextView
                      mentionHashtagColor={COLORS.primary}>
                      {beg.textDescription}
                    </MentionHashtagTextView>
                  </MyTextMulish>
                  <Margin top margin={13} />

                  <MyButton
                    style={{width: '90%'}}
                    title="Share My Story"
                    inverse
                    textStyles={{
                      fontFamily: FONTS.M_REGULAR,
                      fontWeight: '700',
                      fontSize: 13
                    }}
                  />
                  <Margin top margin={11} />
                </View>
              </View>
              <CollapseableView title="General" hand>
                <BegInformationView beg={beg} />
                <FlatList
                  data={videos}
                  style={{width: '95%'}}
                  renderItem={({item}: any) => {
                    console.log(item.thumbLink, 'Thumblinks');

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
                    {'Explain who you are and why are you creating thig beg.'}
                  </MyTextMulish>
                  <MyTextInput
                    containerStyle={styles.tiContainer}
                    style={styles.ti}
                    multiline
                    blurOnSubmit
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
                    {followers.map(renderFollowers)}
                  </View>
                  <MyTextMulish style={[styles.storyText, {marginTop: 18}]}>
                    {'Invite Users'}
                  </MyTextMulish>
                  <MyTextInput
                    placeholder="Email Address"
                    containerStyle={{borderRadius: 8}}
                  />
                  <MyTextMulish style={[styles.storySubText, {marginLeft: 10}]}>
                    {'Enter each email with a comma separation'}
                  </MyTextMulish>
                  <Margin top margin={29} />
                  <MyButton
                    title="Send Invitations"
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
              <CollapseableView title="Success Story" bell>
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
                  <Image
                    source={ICONS.noimage}
                    style={{height: 285, width: '100%'}}
                  />
                  <MyTextMulish
                    onPress={() => {}}
                    style={{
                      color: COLORS.primary,
                      alignSelf: 'flex-end',
                      fontWeight: '700',
                      marginTop: 4,
                      marginBottom: 25
                    }}>
                    Remove
                  </MyTextMulish>
                  <MyButton
                    title="+ Add Video"
                    inverse
                    style={{height: 44, borderRadius: 100}}
                    textStyles={{fontWeight: '700', fontSize: 13}}
                  />
                  <Margin top margin={35} />
                </View>
              </CollapseableView>
              <CollapseableView title="Donors" bell></CollapseableView>
            </View>
          </View>
        </ScrollView>
      </View>
      <EndAndWithdraw
        visible={withdrawModal}
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
    minHeight: 203,

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

// const styles = StyleSheet.create({
//   subheading: {
//     color: '#28383ECC',
//     fontSize: 12,
//     lineHeight: 18,
//     width: '90%'
//   },
//   tiContainer: {
//     height: 180,
//     borderRadius: 4,
//     borderWidth: 1.25,
//     borderColor: '#28383ECC'
//   },
//   ti: {
//     fontFamily: FONTS.M_REGULAR,
//     fontSize: 10,
//     height: 170
//   },
//   cardHeading: {
//     fontSize: 14,
//     color: '#FFFFFF',
//     fontWeight: '500',
//     lineHeight: 22
//   },
//   noteText: {
//     color: 'rgba(40, 56, 62, 0.8)',
//     fontSize: 12,
//     lineHeight: 18
//   }
// });
