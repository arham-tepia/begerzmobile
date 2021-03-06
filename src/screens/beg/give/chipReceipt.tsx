import Clipboard from '@react-native-community/clipboard';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import {CheckCircle} from '../../../components/icons/checkCircle';
import {MyButton} from '../../../components/myButton';
import {MyTextMontserrat} from '../../../components/textMontserrat';
import {MyTextPoppins} from '../../../components/textPoppins';
import {COLORS} from '../../../constants/colors';
import {FONTS} from '../../../constants/fonts';
import {ICONS} from '../../../constants/icons';
import {commonStyles} from '../../../styles/styles';
import {BegHeadings} from '../post/components/begHeadings';
import {ShareLinkBox} from '../post/components/shareLinkBox';
import Toast from 'react-native-toast-message';

export const ChipReceipt = ({navigation, route}: any) => {
  const beg = route.params.beg;
  function onNextPress() {
    navigation.navigate('chipin-react', {beg: beg});
  }
  const link = 'https://app.begerz.net/beg/details/' + beg._id;
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
  function onCopyLink() {
    Clipboard.setString(link);
    Toast.show({
      type: 'success',
      text1: 'Link copied to clipboard'
    });
  }
  return (
    <>
      <SafeAreaView style={commonStyles.main}>
        <View style={{marginTop: 20}} />
        <BegHeadings style={{fontFamily: FONTS.P_SEMIBOLD}}>
          You chipped in, nice!
        </BegHeadings>
        <View style={{marginTop: 21}} />
        <CheckCircle />
        <View style={{marginTop: 21}} />
        <MyTextMontserrat style={[styles.email, {marginBottom: 5}]}>
          A receipt was sent to
        </MyTextMontserrat>
        <MyTextMontserrat style={[styles.email, {marginBottom: 5}]}>
          {beg.author.email}
        </MyTextMontserrat>
        <View style={[styles.divider, {marginTop: 16, marginBottom: 23}]} />
        <BegHeadings style={{fontFamily: FONTS.P_SEMIBOLD}}>
          Share the love
        </BegHeadings>
        <View style={{width: '90%', marginTop: 24}}>
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
          <ShareLinkBox link={link} onCopyPress={onCopyLink} />
          <View style={{marginBottom: 50}} />

          <MyTextPoppins
            style={{color: '#3b3e44', fontFamily: FONTS.P_REGULAR}}>
            Finished Sharing?
          </MyTextPoppins>
          <View style={{marginTop: 10}} />
          <MyButton
            style={{height: 48, borderRadius: 24, alignSelf: 'center'}}
            title="NEXT"
            onPress={onNextPress}
            textStyles={{
              fontFamily: FONTS.P_REGULAR,
              fontWeight: '600',
              letterSpacing: 0
            }}
          />
          <View style={{marginTop: 10}} />
          <MyTextPoppins
            onPress={() => navigation.navigate('bn-accounts')}
            style={styles.skipText}>
            Skip,View Beg Dashboard
          </MyTextPoppins>
        </View>
      </SafeAreaView>
      <Toast position="bottom" />
    </>
  );
};

const styles = StyleSheet.create({
  email: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#3b3e44'
  },
  divider: {
    borderWidth: 0.5,
    width: '90%',
    borderColor: 'rgba(40, 56, 62, 0.8)',
    opacity: 0.8
  },
  skipText: {
    color: COLORS.primary,
    fontSize: 12,
    textAlign: 'center',
    textDecorationColor: COLORS.primary,
    textDecorationLine: 'underline'
  }
});
