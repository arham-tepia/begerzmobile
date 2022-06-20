import React from 'react';
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

interface Props {
  onCancelPress?(): void;
  visible: boolean;
}

export const EndAndWithdraw = (props: Props) => {
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
              <MyTextMulish style={[styles.h]}>$1000.00</MyTextMulish>
            </View>
            <View style={[styles.row, {marginTop: 13}]}>
              <MyTextMulish style={[{fontWeight: '500'}]}>
                Begerz fee (4%)
              </MyTextMulish>
              <MyTextMulish style={[{fontWeight: '500'}]}>
                ($40.00)
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
                <TextInput value="$5.00" style={styles.ti} />
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
                <TextInput value="$5.00" style={styles.ti} />
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
                active
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
                115 Points
              </MyTextMulish>
            </View>
            <Margin top margin={11} />
            <View style={styles.row}>
              <MyTextMulish style={{fontWeight: '500', maxWidth: '70%'}}>
                Karma Points Earned
              </MyTextMulish>
              <MyTextMulish style={{fontWeight: '500'}}>45 Points</MyTextMulish>
            </View>
          </View>
          <Divider />
          <Margin top margin={18} />
          <View style={styles.w90}>
            <View style={styles.row}>
              <MyTextMulish style={[styles.h1, {maxWidth: '70%'}]}>
                Total Withdrawl
              </MyTextMulish>
              <MyTextMulish style={[styles.h]}>$986.00</MyTextMulish>
            </View>
            <Margin top margin={18} />
            <MyTextMulish style={{fontWeight: '500', maxWidth: '70%'}}>
              ACH Withdrawal | My Bank .....4567
            </MyTextMulish>
          </View>
          <Divider />
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
    color: '#565656'
  }
});
