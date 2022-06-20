import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Margin} from '../../../components/margin';
import {MyButton} from '../../../components/myButton';
import {MyTextMulish} from '../../../components/textMulish';
import {FONTS} from '../../../constants/fonts';
import {HomeBeg} from '../../home/components/homeBeg';
import {BegInformationView} from './components/begInformationView';
import {CollapseableView} from './components/collapsableView';
import {Dropdown} from './components/dropdown';
import {EndAndWithdraw} from './components/withdraw';

export const MyBegDashboard = () => {
  const [withdrawModal, setWithdrawModal]: any = useState(false);
  return (
    <>
      <View style={styles.main}>
        <ScrollView style={{width: '100%'}}>
          <View style={{alignItems: 'center', width: '100%'}}>
            <Margin top margin={0} />
            <HomeBeg noGradient data={{}} hideUser transparent />
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
                      <MyTextMulish style={styles.statTxt}>4.2k</MyTextMulish>
                      <MyTextMulish style={[styles.statTxt, {color: 'grey'}]}>
                        Donors
                      </MyTextMulish>
                    </View>
                    <View
                      style={{
                        width: '50%',
                        alignItems: 'center'
                      }}>
                      <MyTextMulish style={styles.statTxt}>1.2k</MyTextMulish>
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
                    style={[styles.desc, {textAlign: 'center', width: '60%'}]}>
                    Submit a success story to be featured in Begerz community.
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
              <CollapseableView title="Title, Goal & Video" hand>
                <BegInformationView />
              </CollapseableView>
              <CollapseableView title="Story" edit></CollapseableView>
              <CollapseableView title="Milestones" golf></CollapseableView>
              <CollapseableView title="Notifications" bell></CollapseableView>
            </View>
          </View>
        </ScrollView>
      </View>
      <EndAndWithdraw
        visible={withdrawModal}
        onCancelPress={() => setWithdrawModal(false)}
      />
      <Dropdown />
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
    alignItems: 'center'
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
  }
});
