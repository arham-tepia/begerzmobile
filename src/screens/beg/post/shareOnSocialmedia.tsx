import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {MyButton} from '../../../components/myButton';
import {MyTextInput} from '../../../components/myTextinput';
import {MyTextPoppins} from '../../../components/textPoppins';
import {COLORS} from '../../../constants/colors';
import {FONTS} from '../../../constants/fonts';
import {ICONS} from '../../../constants/icons';
import {commonStyles} from '../../../styles/styles';
import {BegHeadings} from './components/begHeadings';
import {Divider} from './components/divider';
import {ShareLinkBox} from './components/shareLinkBox';
import Clipboard from '@react-native-community/clipboard';
import Toast from 'react-native-toast-message';

export const ShareBegOnSocialMedia = ({navigation, route}: any) => {
  var subtext = 'We recommend asking least 3-5 firends to help you share';
  var subtext1 = 'sharing on a social network can raise up to 5x more!';
  const beg = route.params.beg;
  const social = [
    {
      name: 'mail',
      icon: ICONS.mail,
      onPress: () => {}
    },
    {
      name: 'insta',
      icon: ICONS.insta,
      onPress: () => {}
    },
    {
      name: 'fb',
      icon: ICONS.facebook,
      onPress: () => {}
    },
    {
      name: 'share',
      icon: ICONS.sharing,
      onPress: () => {}
    },
    {
      name: 'twitter',
      icon: ICONS.twitter,
      onPress: () => {}
    }
  ];

  const RenderIcon = (item: any) => {
    return (
      <TouchableOpacity
        style={{width: '15%', alignItems: 'center'}}
        onPress={item.onPress}>
        <Image source={item.icon} style={{height: 40, width: 40}} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={commonStyles.main}>
        <View style={{width: '90%', marginTop: 10}}>
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
              {marginTop: 10, width: '90%', alignSelf: 'center'}
            ]}>
            {subtext}
          </MyTextPoppins>
          <MyTextPoppins
            style={[styles.subHeading, {width: '95%', alignSelf: 'center'}]}>
            {subtext1}
          </MyTextPoppins>
          <Divider
            style={{
              borderColor: 'rgba(40, 56, 62, 0.8)',
              borderWidth: 0.8,
              marginVertical: 28,
              width: '100%',
              alignSelf: 'center'
            }}
          />

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 24,
              justifyContent: 'center'
            }}>
            {social.map(RenderIcon)}
          </View>
          <ShareLinkBox
            onCopyPress={() => {
              Clipboard.setString(
                'https://app.begerz.net/beg/details/' + beg._id
              );
              Toast.show({
                type: 'success',
                text1: 'Link copied to clipboard'
              });
            }}
            link={'https://app.begerz.net/beg/details/' + beg._id}
          />
          <View style={{marginBottom: 50}} />

          <MyTextPoppins
            style={{color: '#3b3e44', fontFamily: FONTS.P_REGULAR}}>
            Finished Sharing?
          </MyTextPoppins>
          <View style={{marginTop: 10}} />
          <MyButton
            style={{height: 48, borderRadius: 24, alignSelf: 'center'}}
            title="NEXT"
            textStyles={{
              fontFamily: FONTS.P_REGULAR,
              fontWeight: '600',
              letterSpacing: 0
            }}
            onPress={() => navigation.navigate('bn-home')}
          />
          <View style={{marginTop: 10}} />
          <MyTextPoppins
            onPress={() => navigation.navigate('bn-accounts')}
            style={styles.skipText}>
            Skip,View Beg Dashboard
          </MyTextPoppins>
        </View>
      </View>
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
