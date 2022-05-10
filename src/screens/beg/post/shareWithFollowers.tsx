import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MyButton} from '../../../components/myButton';
import {MyTextInput} from '../../../components/myTextinput';
import {MyTextPoppins} from '../../../components/textPoppins';
import {COLORS} from '../../../constants/colors';
import {FONTS} from '../../../constants/fonts';
import {commonStyles} from '../../../styles/styles';
import {BegHeadings} from './components/begHeadings';
import {FollowerComponent} from './components/follwerComponent';

export const ShareBegWithFollowers = ({navigation}: any) => {
  var subtext = 'We recommed asking least 3-5 firends to help you share';
  var subtext1 = 'sharing on a social network can raise up to 5x more!';
  return (
    <View style={commonStyles.main}>
      <View style={{width: '90%', marginTop: 10}}>
        <BegHeadings
          style={{
            textAlign: 'center',
            fontFamily: FONTS.P_SEMIBOLD,
            color: '#000000',
          }}>
          Share your beg
        </BegHeadings>
        <MyTextPoppins style={[styles.subHeading, {marginTop: 10}]}>
          {subtext}
        </MyTextPoppins>
        <MyTextPoppins style={styles.subHeading}>{subtext1}</MyTextPoppins>
        <View style={{marginTop: 15, width: '100%'}}>
          <MyTextPoppins style={styles.heading}>
            Select Followers to Share With:
          </MyTextPoppins>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <FollowerComponent />
          <FollowerComponent />
          <FollowerComponent />
        </View>
        <MyTextPoppins
          style={{
            fontFamily: FONTS.P_SEMIBOLD,
            fontSize: 12,
            color: '#3B3E44',
            marginTop: 10,
          }}>
          Invite Users
        </MyTextPoppins>
        <MyTextInput containerStyle={styles.ti} placeholder="Email Address" />
        <MyTextPoppins
          style={{
            fontFamily: FONTS.P_REGULAR,
            fontSize: 10,
            color: '#7B7B7B',
            width: '95%',
            textAlign: 'left',
            alignSelf: 'center',
          }}>
          Enter each email address with a comma separation
        </MyTextPoppins>
        <View
          style={{
            width: '40%',
            marginTop: 30,
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <MyButton
            title="Share"
            textStyles={{
              fontFamily: FONTS.P_REGULAR,
              fontSize: 16,
              alignSelf: 'center',
              letterSpacing: 0,
              fontWeight: '600',
            }}
          />
        </View>
        <View style={{marginTop: 20}} />
        <MyTextPoppins style={{color: '#3b3e44', fontFamily: FONTS.P_REGULAR}}>
          Finished Sharing?
        </MyTextPoppins>
        <View style={{marginTop: 10}} />
        <MyButton
          style={{height: 48, borderRadius: 24}}
          title="NEXT"
          textStyles={{
            fontFamily: FONTS.P_REGULAR,
            fontWeight: '600',
            letterSpacing: 0,
          }}
          onPress={() => navigation.navigate('shareOnSocial')}
        />
        <View style={{marginTop: 10}} />
        <MyTextPoppins onPress={() => {}} style={styles.skipText}>
          Skip,View Beg Dashboard
        </MyTextPoppins>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subHeading: {
    color: '#28383E',
    lineHeight: 20,
    opacity: 0.8,
    textAlign: 'center',
  },
  heading: {
    color: '#000000',
    fontFamily: FONTS.P_MEDIUM,
    lineHeight: 22,
  },
  ti: {
    borderRadius: 8,
    borderColor: 'rgba(40,56,61,0.8)',
  },
  skipText: {
    color: COLORS.primary,
    fontSize: 12,
    textAlign: 'center',
    textDecorationColor: COLORS.primary,
    textDecorationLine: 'underline',
  },
});
