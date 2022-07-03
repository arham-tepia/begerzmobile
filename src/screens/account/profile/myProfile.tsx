import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {MyTextInput} from '../../../components/myTextinput';
import {MyTextMulish} from '../../../components/textMulish';
import {commonStyles} from '../../../styles/styles';
import {GradientButton} from './components/gradientButton';
import {MyProfileAvatar} from './components/profileAvatar';
import {ICONS} from '../../../constants/icons';
import {getAccountInformationById} from '../../../api/accounts';

export const MyProfile = () => {
  async function GetData() {
    const res = await getAccountInformationById('62bdb512cc35e4f19b532c43');
    console.log(res, 'Account');
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <View style={commonStyles.main}>
      <ScrollView style={{marginTop: 20, width: '100%'}}>
        <View style={{width: '100%', alignItems: 'center'}}>
          <MyProfileAvatar />
          <MyTextMulish style={[styles.name, {marginTop: 12}]}>
            Arham Saqib
          </MyTextMulish>
          <View style={{width: '90%', marginTop: 30}}>
            <MyTextMulish style={[styles.heading]}>
              Personal Information
            </MyTextMulish>
            <View style={{marginTop: 27}} />
            <MyTextInput label="First Name" placeholder="John" />
            <View style={{marginTop: 35}} />
            <MyTextInput label="Last Name" placeholder="Doe" />
            <View style={{marginTop: 35}} />
            <MyTextInput label="Email" placeholder="abc@xyz.com" />
            {/* <MyTextMulish style={[styles.heading, {marginTop: 42}]}>
              Connect Social
            </MyTextMulish>
            <View style={{marginTop: 24}} />
            <GradientButton
              icon={ICONS.facebookFull}
              title="Connect your facebook"
            />
            <View style={{marginTop: 24}} />
            <GradientButton
              icon={ICONS.instagramFull}
              title="Connect your instagram"
            />
            <View style={{marginTop: 24}} />
            <GradientButton
              icon={ICONS.twitterFull}
              title="Connect your twitter"
            /> */}
            <MyTextMulish style={[styles.heading, {marginTop: 49}]}>
              Delete your account
            </MyTextMulish>
            <View style={{marginTop: 25}} />
            <GradientButton icon={ICONS.binFull} title="Delete your account" />
            <View style={{marginTop: 25}} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    color: '#000000'
  },
  heading: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000000'
  }
});
