import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {CheckCircle} from '../../../components/icons/checkCircle';
import {DollarBag} from '../../../components/icons/dollarBag';
import {MyButton} from '../../../components/myButton';
import {MyTextPoppins} from '../../../components/textPoppins';
import {FONTS} from '../../../constants/fonts';
import {commonStyles} from '../../../styles/styles';
import {BegHeadings} from './components/begHeadings';

export const BegIsReady = ({navigation, route}: any) => {
  const beg = route.params.beg;
  function onNextPress() {
    navigation.navigate('shareWithFollowers', {beg: beg});
  }
  return (
    <SafeAreaView style={commonStyles.main}>
      <View style={{marginTop: 20}} />
      <BegHeadings style={{fontFamily: FONTS.P_SEMIBOLD}}>
        Your beg is ready!
      </BegHeadings>
      <View style={{marginTop: 30}} />
      <CheckCircle />
      <View style={{marginTop: 30}} />

      <View
        style={{
          width: '70%',
          paddingVertical: 12,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          borderColor: '#7B7B7B',
          borderTopWidth: 1,
          borderBottomWidth: 1
        }}>
        <DollarBag />
        <MyTextPoppins
          style={{width: '70%', marginLeft: 16, fontFamily: FONTS.P_MEDIUM}}>
          When you get your first contribution, we’ll remind you to setup
          withdrawals
        </MyTextPoppins>
      </View>
      <View style={{marginTop: 24}} />

      <MyTextPoppins
        style={{
          fontFamily: FONTS.P_MEDIUM,
          fontSize: 12,
          width: '80%',
          textAlign: 'center'
        }}>
        Now that you setup the beg. let’s take a moment to make sure you get
        noticed!
      </MyTextPoppins>
      <View style={{width: '80%', marginTop: 56}}>
        <MyButton
          style={{height: 46, borderRadius: 24}}
          title="NEXT"
          textStyles={{fontFamily: FONTS.P_SEMIBOLD}}
          onPress={onNextPress}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
