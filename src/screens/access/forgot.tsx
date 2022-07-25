import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {MyButton} from '../../components/myButton';
import {MyTextInput} from '../../components/myTextinput';
import {COLORS} from '../../constants/colors';
import {commonStyles} from '../../styles/styles';
import {AccessHeading} from './components/heading';
import Toast from 'react-native-toast-message';
import {createResetLink} from '../../api/passwords';
import {MyTextMulish} from '../../components/textMulish';
import {ErrorText} from '../../components/errorText';
import {wait} from '../../helpers/wait';

export const ForgotPassword = ({navigation}: any) => {
  const [email, setEmail]: any = useState('');
  const [loader, setLoader]: any = useState(false);
  const [error, setError]: any = useState(false);
  const [success, setSuccess]: any = useState(false);
  var subtext =
    'Welcome to Begerz, Please put your credentials below to start using the app.';
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 0;

  async function onSubmit() {
    setError(false);
    setSuccess(false);
    const data = {
      email: email,
      role: 'customer'
    };
    setLoader(true);
    const res = await createResetLink(data).finally(() => setLoader(false));
    console.log(res, 'response');
    setEmail('');
    if (res.errors) {
      setError(res.errors[0].msg);
    }
    if (res.message) {
      setError(res.message);
    }
    if (res.resetLink) {
      setSuccess(true);
      wait(3000).finally(() => navigation.goBack());
    }
  }

  return (
    <>
      <View style={[commonStyles.main]}>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={keyboardVerticalOffset}
          style={{marginTop: 21}}>
          <ScrollView style={{width: '100%'}}>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                alignSelf: 'center'
              }}>
              <View style={{width: '95%'}}>
                <AccessHeading>Forgot Password</AccessHeading>
                <Text style={styles.subtext}>{subtext}</Text>
                <View style={{marginTop: 38}} />
                <MyTextInput
                  label="Email Address"
                  placeholder="Enter Email Address"
                  onChangeText={setEmail}
                  value={email}
                />
                {error && <ErrorText>*{error}</ErrorText>}
                {success && (
                  <MyTextMulish style={{textAlign: 'center', marginTop: 5}}>
                    A password reset link has been sent to your email.
                  </MyTextMulish>
                )}
              </View>
            </View>
          </ScrollView>
          <View style={styles.bottomText}>
            <MyButton
              title="SUBMIT"
              loading={loader}
              //onPress={() => navigation.navigate('resetPassword')}
              onPress={onSubmit}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
      <Toast position="bottom" />
    </>
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
