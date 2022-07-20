import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {RootStateOrAny, useSelector} from 'react-redux';
import {getUserPaymethods} from '../../../api/user';
import {Margin} from '../../../components/margin';
import {MyTextMulish} from '../../../components/textMulish';
import {COLORS} from '../../../constants/colors';
import {commonStyles} from '../../../styles/styles';
import {Divider} from '../../beg/post/components/divider';
export const PaymentAndWithdrawl = ({navigation}: any) => {
  const user = useSelector((state: RootStateOrAny) => state.currentUser);
  const [payMethod, setPaymethod]: any = useState([]);
  const [loader, setLoader]: any = useState(false);
  async function GetData() {
    setLoader(true);
    const res = await getUserPaymethods(user.id).finally(() =>
      setLoader(false)
    );
    console.log(res, 'response paymethod');
    if (res.results) {
      if (res.results.length >= 1) {
        setPaymethod(res.results[0]);
      }
    }
  }
  useEffect(() => {
    GetData();
  }, []);
  var note =
    'You can modify these settings at any time when you withdraw funds.';
  return (
    <View style={[commonStyles.main, {backgroundColor: 'transparent'}]}>
      <ScrollView style={{width: '100%'}}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          {/* <Margin top margin={22} />
          <MyTextMulish style={styles.title}>Payment Settings</MyTextMulish>
          <Margin top margin={9} />
          <View style={styles.card}>
            <View style={{width: '90%', justifyContent: 'center'}}>
              <Margin top margin={18} />
              <MyTextMulish style={styles.cardTextMain}>
                Paypal ID: arhamsaqib@outlook.com
              </MyTextMulish>
              <Margin top margin={19} />
              <MyTextMulish onPress={() => {}} style={styles.cardTexthighlight}>
                Update PayPal Settings
              </MyTextMulish>
              <Margin top margin={18} />
            </View>
          </View>
          <Margin top margin={22} />
          <GradientButton icon={ICONS.wallet} title="Add Payment Method" />
          <Margin top margin={31} />
          <Divider /> */}
          <Margin top margin={22} />
          <MyTextMulish style={styles.title}>
            Withdrawl Settings {loader && <ActivityIndicator />}
          </MyTextMulish>
          <Margin top margin={9} />
          <View style={styles.card}>
            <View style={{width: '90%', justifyContent: 'center'}}>
              <Margin top margin={18} />
              <MyTextMulish numberOfLines={1} style={[styles.cardTextMain]}>
                {payMethod.accountNumber
                  ? 'ACH Withdrawal | ' + payMethod.accountNumber
                  : 'ACH Withdrawal | None'}
              </MyTextMulish>
              <Margin top margin={19} />
              <MyTextMulish
                onPress={() =>
                  navigation.navigate('payments-withdrawalSettings', {
                    method: payMethod ?? []
                  })
                }
                style={styles.cardTexthighlight}>
                Edit Deposite Settings
              </MyTextMulish>
              <Margin top margin={18} />
            </View>
          </View>
          <Margin top margin={31} />
          <Divider />
          {/* <Margin top margin={31} />
          <MyButton
            title="Save Changes"
            style={{height: 48, borderRadius: 24}}
            textStyles={{
              fontWeight: '600',
              fontFamily: FONTS.P_REGULAR,
              fontSize: 16
            }}
          /> */}
          <Margin top margin={41} />
          <MyTextMulish style={[styles.note]}>
            Note:{' '}
            <MyTextMulish style={[styles.note, {fontWeight: '500'}]}>
              {note}
            </MyTextMulish>
          </MyTextMulish>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000000'
  },
  note: {
    color: '#3b3e44',
    fontWeight: '700',
    fontSize: 16
  },
  cardTextMain: {
    fontWeight: '400',
    fontSize: 18,
    color: '#000000'
  },
  cardTexthighlight: {
    color: COLORS.primary
  },
  card: {
    borderRadius: 10,
    backgroundColor: 'white',
    minHeight: 95,
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'center'
  }
});
