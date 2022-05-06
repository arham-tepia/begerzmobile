import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MyButton} from '../../components/myButton';
import {MyTextInput} from '../../components/myTextinput';
import {COLORS} from '../../constants/colors';
import {commonStyles} from '../../styles/styles';
import {AccessHeading} from './components/heading';

export const ForgotPassword = ({navigation}: any) => {
  var subtext =
    'Welcome to Begerz, Please put your credentials below to start using the app.';
  return (
    <View style={[commonStyles.main]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        style={{marginTop: 21}}>
        <ScrollView style={{width: '100%'}}>
          <View
            style={{width: '100%', alignItems: 'center', alignSelf: 'center'}}>
            <View style={{width: '95%'}}>
              <AccessHeading>Forgot Password</AccessHeading>
              <Text style={styles.subtext}>{subtext}</Text>
              <View style={{marginTop: 38}} />
              <MyTextInput
                label="Email Address"
                placeholder="Enter Email Address"
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomText}>
          <MyButton
            title="SUBMIT"
            onPress={() => navigation.navigate('resetPassword')}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  subtext: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    color: '#7B7B7B',
    marginTop: 8,
  },
  forgot: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: COLORS.primary,
    textAlign: 'center',
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.primary,
  },
  bottomText: {
    marginBottom: 30,
  },
});
