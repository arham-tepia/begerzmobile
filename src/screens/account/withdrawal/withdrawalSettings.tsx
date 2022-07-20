import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Margin} from '../../../components/margin';
import {MyTextMulish} from '../../../components/textMulish';
import {COLORS} from '../../../constants/colors';
import {commonStyles} from '../../../styles/styles';
import {FONTS} from '../../../constants/fonts';
import {Divider} from '../../beg/post/components/divider';
import {MyButton} from '../../../components/myButton';
import {MyTextInput} from '../../../components/myTextinput';
import Toast from 'react-native-toast-message';
import {RootStateOrAny, useSelector} from 'react-redux';
import {createPaymethod, updatePaymethodByID} from '../../../api/paymethods';
export const WithdrawalSettings = ({navigation, route}: any) => {
  const [desc, setDesc]: any = useState('');
  const [acc, setAcc]: any = useState('');
  const [routing, setRouting]: any = useState('');
  const [loader, setLoader]: any = useState(false);
  const user = useSelector((state: RootStateOrAny) => state.currentUser);
  var note =
    'You can modify these settings at any time when you withdraw funds.';

  function checkRoute() {
    const method = route.params.method;
    if (method.accountNumber) {
      setAcc(method.accountNumber);
    }
    if (method.description) {
      setDesc(method.description);
    }
    if (method.routeNumber) {
      setRouting(method.routeNumber);
    }
  }

  async function onSavePress() {
    const method = route.params.method;
    const paytype = 'ach';
    //setLoader(true);
    if (routing.length >= 1) {
      if (routing.length !== 9) {
        Toast.show({
          type: 'error',
          text1: 'Please enter a valid routing number'
        });
        return;
      }
    }
    if (desc.length > 1 && acc.length > 1) {
      setLoader(true);
      if (method._id) {
        const res = await updatePaymethodByID(method._id, {
          userId: user.id,
          description: desc,
          accountNumber: acc,
          routeNumber: routing,
          paytype: paytype
        }).finally(() => setLoader(false));
        console.log(res, 'update response');
        Toast.show({
          type: 'success',
          text1: 'Account Updated'
        });
      } else {
        const res = await createPaymethod({
          userId: user.id,
          description: desc,
          accountNumber: acc,
          routeNumber: routing,
          paytype: paytype
        }).finally(() => setLoader(false));
        console.log(res, 'create response');
        Toast.show({
          type: 'success',
          text1: 'Account Saved'
        });
      }
    }
  }

  useEffect(() => {
    checkRoute();
  }, []);
  return (
    <>
      <View style={[commonStyles.main, {backgroundColor: 'transparent'}]}>
        <ScrollView style={{width: '100%'}}>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Margin top margin={22} />
            <MyTextMulish style={styles.title}>Withdrawl Settings</MyTextMulish>
            <Margin top margin={9} />
            <View style={styles.card}>
              <View style={{width: '90%', justifyContent: 'center'}}>
                <Margin top margin={18} />
                <MyTextMulish numberOfLines={1} style={styles.cardTextMain}>
                  ACH Withdrawal | {acc}
                </MyTextMulish>
                <Margin top margin={19} />
                <MyTextInput
                  label="Description/Nickname"
                  onChangeText={setDesc}
                  value={desc}
                />
                <Margin top margin={35} />
                <MyTextInput
                  label="Account Number"
                  onChangeText={setAcc}
                  value={acc}
                />
                <Margin top margin={35} />
                <MyTextInput
                  label="Routing Number"
                  onChangeText={setRouting}
                  value={routing}
                />
                <Margin top margin={35} />
              </View>
            </View>
            <Margin top margin={31} />
            <Divider />
            <Margin top margin={31} />
            <MyButton
              title="Save Changes"
              onPress={onSavePress}
              loading={loader}
              disabled={loader}
              style={{height: 48, borderRadius: 24}}
              textStyles={{
                fontWeight: '600',
                fontFamily: FONTS.P_REGULAR,
                fontSize: 16
              }}
            />
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
      <Toast position="bottom" />
    </>
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
