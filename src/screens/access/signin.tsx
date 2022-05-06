import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
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

export const Signin = ({navigation}: any) => {
  var subtext =
    'Welcome to Begerz, Please put your credentials below to start using the app.';
  return (
    <SafeAreaView style={[commonStyles.main]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        style={{marginTop: 21}}>
        <ScrollView style={{width: '100%'}}>
          <View
            style={{width: '100%', alignItems: 'center', alignSelf: 'center'}}>
            <View style={{width: '95%'}}>
              <AccessHeading>Sign In</AccessHeading>
              <Text style={styles.subtext}>{subtext}</Text>
              <View style={{marginTop: 38}} />
              <MyTextInput
                label="Email Address"
                placeholder="Enter Email Address"
              />
              <View style={{marginTop: 38}} />
              <MyTextInput
                label="Password"
                secureTextEntry
                placeholder="Enter Password"
              />
              <View style={{marginTop: 38}} />
              <MyButton
                title="SIGN IN"
                onPress={() => navigation.navigate('postBeg')}
              />
              <View style={{marginTop: 38}} />
              <Text
                onPress={() => navigation.navigate('forgotPassword')}
                style={styles.forgot}>
                Forgot Password?
              </Text>
            </View>
          </View>
        </ScrollView>
        <Text style={styles.bottomText}>
          {"Don't have an account? "}{' '}
          <Text
            onPress={() => navigation.navigate('signup')}
            style={{color: COLORS.primary}}>
            Sign Up
          </Text>
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    textAlign: 'center',
    color: '#7B7B7B',
  },
});
