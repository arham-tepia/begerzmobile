import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {CriteriaText} from '../../components/criteriaText';
import {ErrorText} from '../../components/errorText';
import {MyButton} from '../../components/myButton';
import {MyTextInput} from '../../components/myTextinput';
import {COLORS} from '../../constants/colors';
import {CRITERIAS, ERRORS} from '../../helpers/errors';
import {commonStyles} from '../../styles/styles';
import {AccessHeading} from './components/heading';

export const ResetPassword = () => {
  var subtext =
    'Welcome to Begerz, Please put your credentials below to start using the app.';
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 0;
  const [focused, setFocused]: any = useState(false);
  return (
    <View style={[commonStyles.main]}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={{marginTop: 21}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{width: '100%'}}>
          <View
            style={{width: '100%', alignItems: 'center', alignSelf: 'center'}}>
            <View style={{width: '95%'}}>
              <AccessHeading>Reset Password</AccessHeading>
              <Text style={styles.subtext}>{subtext}</Text>
              <View style={{marginTop: 38}} />
              <MyTextInput
                onFocus={() => setFocused(true)}
                label="New Password"
                placeholder="New Password"
              />
              {focused && (
                <ErrorText>{ERRORS.resetPassword.makeSure}</ErrorText>
              )}
              {focused && (
                <CriteriaText>{CRITERIAS.resetPassword}</CriteriaText>
              )}
              <View style={{marginTop: 38}} />
              <MyTextInput
                label="Confirm New Password"
                placeholder="Confirm New Password"
              />
              {focused && (
                <ErrorText>{ERRORS.resetPassword.makeSure}</ErrorText>
              )}
              {focused && (
                <CriteriaText>{CRITERIAS.resetPassword}</CriteriaText>
              )}
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomText}>
          <MyButton title="RESET" />
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
    marginTop: 8
  },
  forgot: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: COLORS.primary,
    textAlign: 'center',
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.primary
  },
  bottomText: {
    marginBottom: 30
  }
});
