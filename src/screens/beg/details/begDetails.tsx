import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Share,
  Alert,
  Dimensions,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
import {Avatar} from '../../../components/avatar';
import {MoreIcon} from '../../../components/icons/moreIcon';
import {MyTextMulish} from '../../../components/textMulish';
import {commonStyles} from '../../../styles/styles';
// import Video from 'react-native-video';
import {ICONS} from '../../../constants/icons';
import {MoneyBagHd} from '../../../components/icons/moneybagHd';
import {MyButton} from '../../../components/myButton';
import {PaymentIcon} from '../../../components/icons/payment';
import {ChatIcon} from '../../../components/icons/chat';
import {ConvertDateToObject} from '../../../helpers/simplifyDateObject';
import {begDetailsStyles as styles} from './styles/begDetailsStyles';
//@ts-ignore
import MentionHashtagTextView from 'react-native-mention-hashtag-text';
import {COLORS} from '../../../constants/colors';
import Carousel from 'react-native-snap-carousel';
import {Video} from 'expo-av';
import {RootStateOrAny, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import {postReaction} from '../../../api/reactions';

export const BegDetails = ({route, navigation}: any) => {
  const begDetails = route.params.params.beg;
  const user = useSelector((state: RootStateOrAny) => state.currentUser);
  const [status, setStatus]: any = useState([]);
  //console.log(begDetails, 'Beg Details');
  const acheivements: {
    inspiring?: string;
    informative?: string;
    hilarious?: string;
    brilliant?: string;
    admirable?: string;
  } = begDetails?.achievements;
  const date = ConvertDateToObject(begDetails.goalDate);
  const reactions = [
    {
      icon: ICONS.emojiInspiring,
      name: 'Inspiring',
      count: acheivements?.inspiring ?? '0',
      customStyle: {borderRightWidth: 1, borderColor: '#DEDEDE'}
    },
    {
      icon: ICONS.emojiInformative,
      name: 'Informative',
      count: acheivements?.informative ?? '0',
      customStyle: {borderRightWidth: 1, borderColor: '#DEDEDE'}
    },
    {
      icon: ICONS.emojiHilarious,
      name: 'Hilarious',
      count: acheivements?.hilarious ?? '0',
      customStyle: {borderRightWidth: 1, borderColor: '#DEDEDE'}
    },
    {
      icon: ICONS.emojiBrilliant,
      name: 'Brilliant',
      count: acheivements?.brilliant ?? '0',
      customStyle: {borderRightWidth: 1, borderColor: '#DEDEDE'}
    },
    {
      icon: ICONS.emojiAdmirable,
      name: 'Admirable',
      count: acheivements?.admirable ?? '0'
    }
  ];

  const onShare = async () => {
    console.log(begDetails);

    try {
      const result = await Share.share({
        message: 'https://app.begerz.net/beg/details/' + begDetails._id,
        url: 'https://app.begerz.net/beg/details/' + begDetails._id
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  function onTagPress(word: any) {
    console.log(word, 'word pressed');
  }
  const twidth = Dimensions.get('window').width;
  const width = twidth - 2;
  var ref: any;
  function renderVideos({item}: any) {
    return (
      <>
        <Video
          style={{
            width: width - 4,
            height: '100%',
            alignSelf: 'center'
          }}
          source={{
            uri: item.videoLink
          }}
          onError={e => {
            console.log(e, 'Error');
          }}
          onPlaybackStatusUpdate={status => {
            setStatus(() => status);
          }}
          useNativeControls
          usePoster={!status.isLoaded}
          // usePoster={status.isLoaded === 'true' ? false : true}
          posterSource={{uri: item.thumbLink}}
          posterStyle={{
            width: width - 4,
            height: '100%',
            backgroundColor: 'black'
          }}
        />
      </>
    );
  }

  async function onReactionPress(reaction: string) {
    const lcaps = reaction.toLowerCase();
    console.log(lcaps);
    const d = {
      begId: begDetails._id,
      userId: user.id,
      reactionType: lcaps
    };
    console.log(d, 'data');
    const res = await postReaction(d).finally(() => {});
    if (res._id) {
      Toast.show({
        type: 'success',
        text1: lcaps,
        text2: 'Your reaction has been saved'
      });
    }
  }

  const daysRemaining = parseInt(begDetails.daysRemaining);

  return (
    <>
      <View style={[commonStyles.main, {backgroundColor: '#f2f2f2'}]}>
        <ScrollView style={{width: '100%'}}>
          <View style={{width: '100%', alignItems: 'center'}}>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                backgroundColor: 'white',
                paddingBottom: 17
              }}>
              <View style={styles.topRow}>
                <View style={{width: '80%'}}>
                  <MyTextMulish style={styles.titleText}>
                    {begDetails.title ?? 'No title provided'}
                  </MyTextMulish>
                </View>
                <View style={{width: '15%', alignItems: 'flex-end'}}>
                  <MoreIcon />
                </View>
              </View>
              <View style={styles.avatarRow}>
                <Avatar
                  customSize
                  size={24}
                  pressable
                  source={
                    begDetails.author.profileImage && {
                      uri: begDetails.author.profileImage
                    }
                  }
                  onPress={() =>
                    navigation.navigate('details-begerProfile', {
                      user: begDetails.author
                    })
                  }
                />
                <MyTextMulish style={[styles.createdBytext, {marginLeft: 8}]}>
                  {begDetails.author.username} Created this beg
                </MyTextMulish>
              </View>
            </View>
            <View style={styles.videoView}>
              <Carousel
                // ref={(c) => { this._carousel = c; }}
                data={begDetails.videos}
                renderItem={renderVideos}
                sliderWidth={width}
                itemWidth={width}
                slideStyle={{borderColor: 'red'}}
              />
            </View>
            <View style={styles.emojiRow}>
              {reactions.map((item: any) => {
                return (
                  <TouchableOpacity
                    onPress={() => onReactionPress(item.name)}
                    style={[styles.emojiView, item.customStyle]}>
                    <Image source={item.icon} style={styles.emojiStyle} />
                    <MyTextMulish style={styles.emojiText}>
                      {item.name}
                    </MyTextMulish>
                    <MyTextMulish style={styles.emojiCount}>
                      {item.count}
                    </MyTextMulish>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={styles.statCard}>
              <View style={styles.statCardTopRow}>
                <MoneyBagHd />
                <MyTextMulish style={[styles.goalRaisedText, {marginLeft: 15}]}>
                  ${begDetails.amountRaised ?? '0'}{' '}
                  <MyTextMulish style={styles.goalTotalText}>
                    raised of a ${begDetails.goalAmount} goal
                  </MyTextMulish>
                </MyTextMulish>
              </View>
              <View style={styles.contributionView}>
                <MyTextMulish style={styles.daysLeftText}>
                  {daysRemaining < 1
                    ? 'The goal date has passed'
                    : daysRemaining + ' days left to contribute'}
                  <MyTextMulish style={styles.daysText}> </MyTextMulish>
                </MyTextMulish>
              </View>
              <View style={styles.buttonCont}>
                <MyButton
                  title="Share"
                  style={styles.button}
                  inverse
                  textStyles={styles.buttonText}
                  onPress={onShare}
                />
                <MyButton
                  title="Chip in"
                  style={styles.button}
                  onPress={() =>
                    navigation.navigate('details-chipin', {beg: begDetails})
                  }
                  inverse
                  textStyles={styles.buttonText}
                />
              </View>
              <View style={styles.statContainer}>
                <View
                  style={[
                    styles.statBox,
                    {borderRightWidth: 0.5, borderColor: '#dedede'}
                  ]}>
                  <MyTextMulish style={styles.statValue}>
                    {begDetails.donorCount}
                  </MyTextMulish>
                  <MyTextMulish style={styles.statName}>Donors</MyTextMulish>
                </View>
                <View style={styles.statBox}>
                  <MyTextMulish style={styles.statValue}>
                    {begDetails.shareCount}
                  </MyTextMulish>
                  <MyTextMulish style={styles.statName}>Shares</MyTextMulish>
                </View>
              </View>
              <View style={styles.cardBottomRow}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('begComments', {begId: begDetails._id})
                  }
                  style={styles.cardBottomItem}>
                  <ChatIcon />
                  <MyTextMulish
                    style={[styles.cardBottomItemText, {marginLeft: 13}]}>
                    {begDetails.commentCount} Comments
                  </MyTextMulish>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardBottomItem}>
                  <PaymentIcon />
                  <MyTextMulish
                    style={[styles.cardBottomItemText, {marginLeft: 13}]}>
                    Donations
                  </MyTextMulish>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.dateCont}>
              <MyTextMulish style={styles.dateText}>
                Date: {date.month} {date.date}, {date.year}
              </MyTextMulish>
            </View>
            <View style={styles.detailsCont}>
              <MyTextMulish style={styles.details}>
                <MentionHashtagTextView
                  mentionHashtagPress={onTagPress}
                  mentionHashtagColor={COLORS.primary}>
                  {begDetails.textDescription ?? 'No description'}
                </MentionHashtagTextView>
              </MyTextMulish>
              {/* <MyTextMulish
              style={[styles.details, {color: COLORS.primary, marginTop: 15}]}>
              Read more
            </MyTextMulish> */}
            </View>
          </View>
        </ScrollView>
      </View>
      <Toast position="bottom" />
    </>
  );
};
