import React from 'react';
import {ScrollView, View, Image, TouchableOpacity} from 'react-native';
import {Avatar} from '../../../components/avatar';
import {MoreIcon} from '../../../components/icons/moreIcon';
import {MyTextMulish} from '../../../components/textMulish';
import {commonStyles} from '../../../styles/styles';
import Video from 'react-native-video';
import {ICONS} from '../../../constants/icons';
import {MoneyBagHd} from '../../../components/icons/moneybagHd';
import {MyButton} from '../../../components/myButton';
import {PaymentIcon} from '../../../components/icons/payment';
import {ChatIcon} from '../../../components/icons/chat';
import {ConvertDateToObject} from '../../../helpers/simplifyDateObject';
import {begDetailsStyles as styles} from './styles/begDetailsStyles';

export const BegDetails = ({route}: any) => {
  const begDetails = route.params.params.beg;
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
  return (
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
              <Avatar customSize size={24} />
              <MyTextMulish style={[styles.createdBytext, {marginLeft: 8}]}>
                {begDetails._id} Created this beg
              </MyTextMulish>
            </View>
          </View>
          <View style={styles.videoView}>
            <Video
              source={{uri: begDetails.videoLink}}
              posterResizeMode={'contain'}
              controls
              poster={begDetails.thumbLink}
              paused
              style={{
                width: '100%',
                height: '100%'
              }}
            />
          </View>
          <View style={styles.emojiRow}>
            {reactions.map((item: any) => {
              return (
                <TouchableOpacity style={[styles.emojiView, item.customStyle]}>
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
                10{' '}
                <MyTextMulish style={styles.daysText}>
                  {' '}
                  days left to contribute
                </MyTextMulish>
              </MyTextMulish>
            </View>
            <View style={styles.buttonCont}>
              <MyButton
                title="Share"
                style={styles.button}
                inverse
                textStyles={styles.buttonText}
              />
              <MyButton
                title="Chip in"
                style={styles.button}
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
                <MyTextMulish style={styles.statValue}>3.6k</MyTextMulish>
                <MyTextMulish style={styles.statName}>Donors</MyTextMulish>
              </View>
              <View style={styles.statBox}>
                <MyTextMulish style={styles.statValue}>5.6k</MyTextMulish>
                <MyTextMulish style={styles.statName}>Shares</MyTextMulish>
              </View>
            </View>
            <View style={styles.cardBottomRow}>
              <TouchableOpacity style={styles.cardBottomItem}>
                <ChatIcon />
                <MyTextMulish
                  style={[styles.cardBottomItemText, {marginLeft: 13}]}>
                  0 Comments
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
              {begDetails.textDescription ?? 'No description'}
            </MyTextMulish>
            {/* <MyTextMulish
              style={[styles.details, {color: COLORS.primary, marginTop: 15}]}>
              Read more
            </MyTextMulish> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
