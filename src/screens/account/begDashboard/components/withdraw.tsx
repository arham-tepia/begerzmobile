import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {BottomCard} from '../../../../components/bottomCard';
import {ArrowDownFilled} from '../../../../components/icons/arrownDownFilled';
import {InfoIconBig} from '../../../../components/icons/infoBig';
import {LinkStraight} from '../../../../components/icons/linkStraight';
import {Margin} from '../../../../components/margin';
import {MyButton} from '../../../../components/myButton';
import {Radio} from '../../../../components/radio';
import {MyTextMulish} from '../../../../components/textMulish';
import {COLORS} from '../../../../constants/colors';
import {FONTS} from '../../../../constants/fonts';
import Toast from 'react-native-toast-message';

interface Props {
  onCancelPress?(): void;
  visible: boolean;
  beg?: any;
  paymethod?: any;
  loader?: boolean;
  userId?: any;
  onWithDrawPress(data: any): void;
}

export const EndAndWithdraw = (props: Props) => {
  const {beg, paymethod, loader, userId, onWithDrawPress} = props;
  const [donation, setDonation]: any = useState('0');
  const [charity, setCharity]: any = useState('0');
  const [earned, setEarned]: any = useState(0);
  const [validation, setValidation]: any = useState(false);

  function Divider() {
    return (
      <View
        style={{
          marginTop: 15,
          borderWidth: 0.5,
          borderColor: '#dedede',
          width: '100%'
        }}
      />
    );
  }

  const amountRaised = beg.amountRaised ? parseInt(beg.amountRaised) : 0;
  const begerzFee = (4 / 100) * amountRaised;
  const processingFee = (2.9 / 100) * amountRaised + 0.3;
  const d = donation.length >= 1 ? parseInt(donation) : 0;
  const c = charity.length >= 1 ? parseInt(charity) : 0;
  const withdrawal = amountRaised - (d + c + begerzFee + processingFee);
  const [chipInType, setChipInType]: any = useState('random');
  const [link, setLink]: any = useState('');

  async function calculateKarmaEarned() {
    const d = donation.length >= 1 ? parseInt(donation) : 0;
    const c = charity.length >= 1 ? parseInt(charity) : 0;
    const karma = d * 20 + c * 20;
    setEarned(karma.toString());
    return karma;
  }

  function onWithdraw() {
    if (paymethod.accountNumber) {
      if (withdrawal <= 0) {
        setValidation(true);
        return;
      } else {
        setValidation(false);
      }
      const d = donation.length >= 1 ? parseInt(donation) : 0;
      const c = charity.length >= 1 ? parseInt(charity) : 0;
      const karma = d * 20 + c * 20;
      if (chipInType === 'random') {
        const data = {
          userId: userId,
          begId: beg._id,
          amountRaised: amountRaised,
          begerzFees: begerzFee,
          processorFees: processingFee,
          withdrawalAmount: withdrawal.toString(),
          chipInAmount: charity ?? 0,
          donationAmount: donation ?? 0,
          paymethodId: paymethod._id,
          chipInType: chipInType,
          karma: karma
        };
        onWithDrawPress(data);
      } else {
        const data = {
          userId: userId,
          begId: beg._id,
          amountRaised: amountRaised,
          begerzFees: begerzFee,
          processorFees: processingFee,
          withdrawalAmount: withdrawal.toString(),
          chipInAmount: charity ?? 0,
          donationAmount: donation ?? 0,
          paymethodId: paymethod._id,
          chipInType: chipInType,
          chipInLink: link,
          karma: karma
        };
        onWithDrawPress(data);
      }
    }
  }

  return (
    <>
      <BottomCard onCancelPress={props.onCancelPress} visible={props.visible}>
        <View style={styles.top}>
          <MyTextMulish style={styles.heading}>End & Withdraw</MyTextMulish>
        </View>
        <ScrollView style={{width: '100%'}}>
          <View style={[styles.w90, {marginTop: 15}]}>
            <View style={styles.row}>
              <MyTextMulish style={[styles.h1, {maxWidth: '70%'}]}>
                Total Raised
              </MyTextMulish>
              <MyTextMulish style={[styles.h]}>${amountRaised}</MyTextMulish>
            </View>
            <View style={[styles.row, {marginTop: 13}]}>
              <MyTextMulish style={[{fontWeight: '500'}]}>
                Begerz fee (4%)
              </MyTextMulish>
              <MyTextMulish style={[{fontWeight: '500'}]}>
                (${begerzFee.toFixed(2)})
              </MyTextMulish>
            </View>
            <View style={[styles.row, {marginTop: 13}]}>
              <MyTextMulish style={[{fontWeight: '500'}]}>
                Processing Fee (2.9% + .30)
              </MyTextMulish>
              <MyTextMulish style={[{fontWeight: '500'}]}>
                (${processingFee.toFixed(2)})
              </MyTextMulish>
            </View>
            <View
              style={{
                width: '100%',
                backgroundColor: COLORS.infoBlue,
                padding: 6,
                marginTop: 14,
                borderRadius: 5
              }}>
              <MyTextMulish
                style={{fontWeight: '600', fontSize: 12, textAlign: 'center'}}>
                Begerz donates 0.5% of our fees directly back to charity.
                ($0.50)
                <MyTextMulish
                  onPress={() => {}}
                  style={{color: COLORS.primary}}>
                  {' '}
                  Learn More
                </MyTextMulish>
              </MyTextMulish>
            </View>
          </View>
          <Divider />
          <Margin top margin={14} />
          <View style={styles.w90}>
            <View style={styles.row}>
              <MyTextMulish style={[styles.h2, {maxWidth: '85%'}]}>
                Donate more to the following charity:
              </MyTextMulish>
              <InfoIconBig />
            </View>
            <Margin top margin={17} />
            <View style={[styles.row]}>
              <TouchableOpacity style={[styles.dropdown, {width: '70%'}]}>
                <View style={[styles.w90, styles.row, {width: '90%'}]}>
                  <MyTextMulish
                    style={{fontWeight: '600', color: '#565656', width: '80%'}}>
                    Habitat for humanity
                  </MyTextMulish>
                  <ArrowDownFilled />
                </View>
              </TouchableOpacity>
              <View style={[styles.dropdown, {width: '25%'}]}>
                <TextInput
                  value={donation}
                  onBlur={() => calculateKarmaEarned()}
                  style={styles.ti}
                  onChangeText={(text: string) => {
                    setDonation(text.replace(/[^0-9]/g, ''));
                  }}
                />
              </View>
            </View>
          </View>
          <Divider />
          <Margin top margin={14} />
          <View style={styles.w90}>
            <View style={styles.row}>
              <MyTextMulish style={[styles.h2, {maxWidth: '85%'}]}>
                Pay it Forward
              </MyTextMulish>
              <InfoIconBig />
            </View>
            <Margin top margin={17} />
            <View style={[styles.row]}>
              <TouchableOpacity
                style={[styles.dropdown, {width: '70%', borderWidth: 0}]}>
                <View style={[styles.w90, {width: '100%'}]}>
                  <MyTextMulish style={{fontWeight: '600', color: '#000000'}}>
                    Donate back to Begerz Community
                  </MyTextMulish>
                </View>
              </TouchableOpacity>
              <View style={[styles.dropdown, {width: '25%'}]}>
                <TextInput
                  onBlur={() => calculateKarmaEarned()}
                  value={charity}
                  style={styles.ti}
                  onChangeText={(text: string) => {
                    setCharity(text.replace(/[^0-9]/g, ''));
                  }}
                />
              </View>
            </View>
            <Margin top margin={6} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Radio
                mainStyle={{
                  borderColor: '#000000',
                  height: 21,
                  width: 21,
                  borderRadius: 21
                }}
                innerStyle={{backgroundColor: '#000000'}}
                active={chipInType === 'random'}
                onPress={() => setChipInType('random')}
              />
              <Margin right margin={10} />
              <MyTextMulish style={{fontWeight: '500'}}>
                Chip-in to a random beg
              </MyTextMulish>
            </View>
            <Margin top margin={10} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Radio
                mainStyle={{
                  borderColor: '#000000',
                  height: 21,
                  width: 21,
                  borderRadius: 21
                }}
                active={chipInType === 'link'}
                onPress={() => setChipInType('link')}
                innerStyle={{backgroundColor: '#000000'}}
              />
              <Margin right margin={10} />
              <MyTextMulish style={{fontWeight: '500'}}>
                Specify a beg to support
              </MyTextMulish>
            </View>
            <Margin top margin={18} />
            <View style={[styles.dropdown]}>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  alignItems: 'center',
                  width: '90%'
                }}>
                <LinkStraight />
                <Margin right margin={14} />
                <TextInput
                  editable={chipInType === 'link'}
                  onChangeText={setLink}
                  value={link}
                  style={styles.ti}
                  placeholder="Enter URL of another beg"
                />
              </View>
            </View>
          </View>
          <Divider />
          <Margin top margin={14} />
          <View style={styles.w90}>
            <View style={styles.row}>
              <MyTextMulish style={[styles.h2, {maxWidth: '85%'}]}>
                Karma Point Earned
              </MyTextMulish>
              <InfoIconBig />
            </View>
            <Margin top margin={14} />
            <View style={styles.row}>
              <MyTextMulish style={{fontWeight: '500', maxWidth: '70%'}}>
                Your Karma Points
              </MyTextMulish>
              <MyTextMulish style={{fontWeight: '500'}}>
                {beg?.author?.karma} Points
              </MyTextMulish>
            </View>
            <Margin top margin={11} />
            <View style={styles.row}>
              <MyTextMulish style={{fontWeight: '500', maxWidth: '70%'}}>
                Karma Points Earned
              </MyTextMulish>
              <MyTextMulish style={{fontWeight: '500'}}>
                {earned} Points
              </MyTextMulish>
            </View>
          </View>
          <Divider />
          <Margin top margin={18} />
          <View style={styles.w90}>
            <View style={styles.row}>
              <MyTextMulish style={[styles.h1, {maxWidth: '70%'}]}>
                Total Withdrawl
              </MyTextMulish>
              <MyTextMulish style={[styles.h]}>${withdrawal}</MyTextMulish>
            </View>
            <Margin top margin={18} />
            <MyTextMulish
              numberOfLines={1}
              style={{fontWeight: '500', maxWidth: '70%'}}>
              ACH Withdrawal |{' '}
              {paymethod.accountNumber ? paymethod.accountNumber : 'None'}
            </MyTextMulish>
          </View>
          {!paymethod.accountNumber && (
            <MyTextMulish
              style={{
                alignSelf: 'center',
                marginVertical: 15,
                color: COLORS.primary
              }}>
              You don't have a withdrawal method setup
            </MyTextMulish>
          )}
          {validation && (
            <MyTextMulish
              style={{
                alignSelf: 'center',
                marginVertical: 15,
                color: COLORS.primary
              }}>
              You don't have enough funds to withdraw
            </MyTextMulish>
          )}
          <Divider />
          <Margin top margin={26} />
          <View
            style={{
              alignSelf: 'center',
              width: '90%',
              backgroundColor: COLORS.infoBlue,
              padding: 6,
              borderRadius: 5
            }}>
            <MyTextMulish
              style={{fontWeight: '600', fontSize: 12, textAlign: 'center'}}>
              Withdrawing funds will mark the beg as complete and you won't be
              able to receive any more donations or chipins.
            </MyTextMulish>
          </View>
          <Margin top margin={26} />

          <View
            style={[
              styles.w90,
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }
            ]}>
            <MyButton
              style={{width: '48%', borderRadius: 100, height: 44}}
              textStyles={{
                fontFamily: FONTS.M_REGULAR,
                fontWeight: '700',
                fontSize: 13
              }}
              inverse
              onPress={props.onCancelPress}
              title="Cancel"
            />
            <MyButton
              title="End & Withdraw"
              loading={loader}
              onPress={onWithdraw}
              style={{width: '48%', borderRadius: 100, height: 44}}
              textStyles={{
                fontFamily: FONTS.M_REGULAR,
                fontWeight: '700',
                fontSize: 13
              }}
            />
          </View>
          <Margin bottom margin={26} />
        </ScrollView>
      </BottomCard>
      <Toast position="top" />
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black'
  },
  top: {
    height: 69,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#dedede'
  },
  h: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 22
  },
  h1: {
    fontWeight: '700',
    color: '#000000',
    fontSize: 18
  },
  h2: {
    fontWeight: '700',
    color: '#000000',
    fontSize: 16
  },
  w90: {
    width: '90%',
    alignSelf: 'center'
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dropdown: {
    minHeight: 40,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#afafaf',
    borderWidth: 1,
    justifyContent: 'center'
  },
  ti: {
    fontWeight: '600',
    fontFamily: FONTS.M_REGULAR,
    fontSize: 14,
    color: '#565656',
    width: '90%',
    textAlign: 'center'
  }
});
