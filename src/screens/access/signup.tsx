import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MyButton} from '../../components/myButton';
import {MyTextInput} from '../../components/myTextinput';
import {COLORS} from '../../constants/colors';
import {ICONS} from '../../constants/icons';
import {commonStyles} from '../../styles/styles';
import {AccessHeading} from './components/heading';

export const Signup = () => {
  var subtext =
    'Welcome to Begerz, Please put your credentials below to start using the app.';

  function CalendarIcon() {
    return (
      <TouchableOpacity>
        <Image source={ICONS.calendar} style={{width: 18, height: 18.42}} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={[commonStyles.main]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        style={{marginTop: 21}}>
        <ScrollView style={{width: '100%'}}>
          <View
            style={{width: '100%', alignItems: 'center', alignSelf: 'center'}}>
            <View style={{width: '95%'}}>
              <AccessHeading>Sign Up</AccessHeading>
              <Text style={styles.subtext}>{subtext}</Text>
              <View style={{marginTop: 38}} />
              <MyTextInput label="First Name" placeholder="Enter First Name" />
              <View style={{marginTop: 38}} />
              <MyTextInput label="Last Name" placeholder="Enter Last Name" />
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
              <MyTextInput
                label="Birthdate"
                placeholder="Choose Date"
                rightComponent={<CalendarIcon />}
              />
              <View style={{marginTop: 38}} />
              <MyButton title="SIGN UP" />
            </View>
          </View>
        </ScrollView>
        <Text style={styles.bottomText}>
          {'Already have an account? '}{' '}
          <Text onPress={() => {}} style={{color: COLORS.primary}}>
            Sign In
          </Text>
        </Text>
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
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    textAlign: 'center',
    color: '#7B7B7B',
    marginBottom: 20,
  },
});
