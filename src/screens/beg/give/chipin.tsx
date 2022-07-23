import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
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
import {BegAmountInput} from '../post/components/begAmountInput';
import {createPaymentIntent} from '../../../api/stripe';
import {RootStateOrAny, useSelector} from 'react-redux';
import {presentPaymentSheet, useStripe} from '@stripe/stripe-react-native';

export const Chipin = ({route, navigation}: any) => {
  const stripe = useStripe();
  const beg = route.params.beg ?? [];
  const [amount, setAmount]: any = useState(15);
  const [coverFee, setCoverFee]: any = useState(false);
  const [privacy, setPrivacy]: any = useState(false);
  const [isCustom, setIsCustom]: any = useState(false);
  const [loader, setLoader]: any = useState(false);
  const user = useSelector((state: RootStateOrAny) => state.currentUser);
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
            ${parseFloat(amount).toFixed(2).toString()}
          </MyTextPoppins>
        </View>
        <BugButton right title="+" onPress={() => setAmount(amount + 5)} />
      </View>
    );
  }

  async function onChipin() {
    await createPayment();
  }

  async function createPayment() {
    setLoader(true);
    const intent = await createPaymentIntent({
      begId: beg._id,
      payorId: user.id,
      payeeId: beg.author._id,
      processorFees: 0,
      amount: amount,
      transaction: 'chipin',
      anonymous: privacy,
      customAmount: isCustom,
      payorFees: 0
    }).finally(() => setLoader(false));
    if (intent.id) {
      await stripe.initPaymentSheet({
        paymentIntentClientSecret: intent.client_secret,
        merchantDisplayName: 'Begerz'
      });
      const r = await presentPaymentSheet()
        .then(r => {
          console.log(r, 'Response');
          if (r.error?.code !== 'Canceled')
            navigation.replace('chipin-receipt', {beg: beg});
        })
        .catch(e => {
          console.log(e, 'Error');
        });
      // if (!error) {
      //   navigation.navigate('chipin-receipt');
      // }
    }
    //return intent;
  }

  const onCustomInput = (text: string) => {
    const amt = text.replace(/[^0-9]/g, '');
    const intAmt = parseFloat(amt);
    if (intAmt < 5 || amt.length < 1) {
      setAmount(5.0);
    } else setAmount(intAmt);
  };

  return (
    <View style={commonStyles.main}>
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '90%'}}>
        <View style={styles.videoView}>
          <Video
            style={{
              width: '100%',
              marginBottom: 10,
              height: 180,
              borderRadius: 4
            }}
            source={{uri: beg.videos[0].videoLink}}
            useNativeControls
            resizeMode={ResizeMode.COVER}
            onReadyForDisplay={response => {
              //console.log(response, 'Video Respose');
            }}
          />
        </View>
        <View style={styles.userRow}>
          <Avatar
            customSize
            size={32}
            source={beg.author.profileImage ?? {uri: beg.author.profileImage}}
          />
          <View style={{marginLeft: 8}}>
            <MyTextPoppins style={styles.subTitle}>
              Funds go directly to
            </MyTextPoppins>
            <MyTextPoppins style={styles.username}>
              {beg.author.username}
            </MyTextPoppins>
          </View>
        </View>
        <MyTextPoppins style={[styles.heading, {marginTop: 24}]}>
          I want to chip in:{' '}
        </MyTextPoppins>

        {!isCustom ? (
          ChipInput()
        ) : (
          <BegAmountInput
            value={amount.toString()}
            viewStyle={{marginTop: 12}}
            onChangeText={onCustomInput}
            keyboardType="numeric"
          />
        )}
        <MyTextPoppins style={styles.minText}>
          Minimim amount is $5.00
        </MyTextPoppins>
        <MyTextMontserrat
          onPress={() => setIsCustom(!isCustom)}
          style={styles.custom}>
          {!isCustom ? 'Enter Custom Amount' : 'Disable custom amount'}
        </MyTextMontserrat>
        <View style={styles.anon}>
          <Radio
            active={coverFee}
            onPress={() => setCoverFee(!coverFee)}
            mainStyle={{height: 16, width: 16}}
            innerStyle={{height: 8, width: 8}}
          />
          <MyTextMontserrat style={{fontSize: 9, marginLeft: 14}}>
            I’d like to cover the fees so this Beger gets more of my
            contribution.
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
          loading={loader}
          disabled={loader}
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
