import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Switch, View} from 'react-native';
import {commonStyles} from '../../../styles/styles';
import {Avatar} from '../../../components/avatar';
import {MyTextPoppins} from '../../../components/textPoppins';
import {BugButton} from './components/bigButton';
import {COLORS} from '../../../constants/colors';
import {MyTextMontserrat} from '../../../components/textMontserrat';
import {Radio} from '../../../components/radio';
import {MySwitch} from '../../../components/mySwitch';
import {InfoIcon} from '../../../components/icons/info';
import {MyButton} from '../../../components/myButton';
import {FONTS} from '../../../constants/fonts';
import {Video, ResizeMode} from 'expo-av';

export const Chipin = ({route, navigation}: any) => {
  const beg = route.params.beg ?? [];
  const [amount, setAmount]: any = useState(5);
  const [anonymous, setAnonymous]: any = useState(false);
  const [privacy, setPrivacy]: any = useState(false);

  function onMinusPress() {
    if (amount > 5) {
      setAmount(amount - 5);
    }
  }

  function ChipInput() {
    const x = Dimensions.get('screen').width;
    const y = x * 0.9;
    const z = y - 180;
    return (
      <View style={styles.chipInput}>
        <BugButton left title="-" onPress={onMinusPress} />
        <View style={[styles.chipInputBox, {width: z}]}>
          <MyTextPoppins
            style={{fontWeight: '600', fontSize: 20, textAlign: 'center'}}>
            ${amount}
          </MyTextPoppins>
        </View>
        <BugButton right title="+" onPress={() => setAmount(amount + 5)} />
      </View>
    );
  }

  async function onChipin() {
    navigation.navigate('chipin-receipt');
  }

  return (
    <View style={commonStyles.main}>
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '90%'}}>
        <View style={styles.videoView}>
          <Video
            style={{
              width: '100%',
              marginBottom: 10,
              aspectRatio: 1
            }}
            source={{uri: beg.videoLink}}
            useNativeControls
            // resizeMode={ResizeMode.COVER}
            onReadyForDisplay={response => {
              console.log(response, 'Video Respose');
            }}
          />
        </View>
        <View style={styles.userRow}>
          <Avatar customSize size={32} />
          <View style={{marginLeft: 8}}>
            <MyTextPoppins style={styles.subTitle}>
              Funds go directly to
            </MyTextPoppins>
            <MyTextPoppins style={styles.username}>Britanny</MyTextPoppins>
          </View>
        </View>
        <MyTextPoppins style={[styles.heading, {marginTop: 24}]}>
          I want to chip in:{' '}
        </MyTextPoppins>
        {ChipInput()}
        <MyTextPoppins style={styles.minText}>
          Minimim amount is $5.00
        </MyTextPoppins>
        <MyTextMontserrat onPress={() => {}} style={styles.custom}>
          Enter Custom Amount
        </MyTextMontserrat>
        <View style={styles.anon}>
          <Radio
            active={anonymous}
            onPress={() => setAnonymous(!anonymous)}
            mainStyle={{height: 16, width: 16}}
            innerStyle={{height: 8, width: 8}}
          />
          <MyTextMontserrat style={{fontSize: 9, marginLeft: 14}}>
            I’d like to cover the fees so this Beger gets more of my
            contribution
          </MyTextMontserrat>
        </View>
        <MyTextPoppins style={{fontSize: 12, marginBottom: 7}}>
          Privacy
        </MyTextPoppins>
        <View style={styles.switchCont}>
          <MySwitch isOn={privacy} onToggle={setPrivacy} />
          <MyTextPoppins
            style={[styles.switchTxt, {marginLeft: 16, marginRight: 12}]}>
            Make my support anonymous
          </MyTextPoppins>
          <InfoIcon />
        </View>
        <MyButton
          title="Chip in"
          textStyles={{fontFamily: FONTS.P_SEMIBOLD}}
          style={{height: 48, borderRadius: 24}}
          onPress={onChipin}
        />
        <MyTextMontserrat
          style={[styles.policyTxt, {marginTop: 24, marginBottom: 16}]}>
          By continuing, you agree with Begerz Terms & Privacy Policy
        </MyTextMontserrat>
        <MyTextMontserrat style={[styles.policyTxt, {marginBottom: 52}]}>
          This site is protected by reCAPTCHA and the Google privacy policy and
          Terms of Service apply.
        </MyTextMontserrat>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  videoView: {
    width: '100%',
    height: 180,
    backgroundColor: 'black',
    borderRadius: 8,
    marginTop: 24
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 8
  },
  subTitle: {
    color: '#3B3E44',
    fontSize: 12
  },
  username: {
    fontSize: 14,
    color: 'black',
    fontWeight: '600'
  },
  heading: {
    fontWeight: '600',
    fontSize: 20,
    color: '#3B3E44'
  },
  chipInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 7
  },
  chipInputBox: {
    height: 80,
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  minText: {
    fontSize: 10,
    color: '#3B3E44'
  },
  custom: {
    fontSize: 12,
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: 16,
    textDecorationLine: 'underline'
  },
  anon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 28
  },
  switchCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 27
  },
  switchTxt: {
    fontWeight: '500',
    fontSize: 12
  },
  policyTxt: {
    fontWeight: '500',
    fontSize: 12,
    color: 'rgba(40, 56, 62, 0.8)'
  }
});
