import React, {createRef, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {loginUser} from '../../api/authentication';
import {MyButton} from '../../components/myButton';
import {MyTextInput} from '../../components/myTextinput';
import {COLORS} from '../../constants/colors';
import {commonStyles} from '../../styles/styles';
import {AccessHeading} from './components/heading';
import Toast from 'react-native-toast-message';
import {useStore} from 'react-redux';
import rememberMeAction from '../../redux/action/rememberMeAction';
import {storeToken} from '../../helpers/tokenManagement';
import {CRITERIAS, ERRORS} from '../../helpers/errors';
import {ErrorText} from '../../components/errorText';
import updateCurrentUserAction from '../../redux/action/currectUserAction';

export const Signin = ({navigation}: any) => {
  const [email, setEmail]: any = useState('');
  const [password, setPassword]: any = useState('');
  const [loader, setLoader]: any = useState(false);
  const [error, setError]: any = useState(false);
  const store = useStore();
  var subtext =
    'Welcome to Begerz, Please put your credentials below to start using the app.';

  async function onLogin() {
    setLoader(true);
    setError(false);
    const data = {
      username: email.trim(),
      password: password.trim(),
      role: 'customer'
    };
    const res = await loginUser(data)
      .catch(e => {
        Toast.show({
          type: 'error',
          text1: 'Network Request Failed',
          text2: e
        });
        setLoader(false);
      })
      .finally(() => setLoader(false));
    console.log(res, 'response');
    if (res._id !== undefined) {
      store.dispatch(
        rememberMeAction({
          email: email,
          password: password,
          rememberMe: true
        })
      );
      store.dispatch(
        updateCurrentUserAction({
          id: res._id,
          karma: res.karma
        })
      );
      storeToken(res.accessToken);
      navigation.replace('mainBottomNavigation');
    } else {
      // Toast.show({
      //   type: 'error',
      //   text1: 'Auth',
      //   text2: res.message
      // });
      setError(true);
    }
  }
  function disabled() {
    return email.length < 8 || password.length < 8;
  }
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 0;

  return (
    <>
      <SafeAreaView style={[commonStyles.main]}>
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
                <AccessHeading>Sign In</AccessHeading>
                <Text style={styles.subtext}>{subtext}</Text>
                <View style={{marginTop: 38}} />
                <MyTextInput
                  label="Username"
                  placeholder="Enter Username"
                  onChangeText={setEmail}
                  value={email}
                />
                {error && <ErrorText>{ERRORS.signin.emailnotvalid}</ErrorText>}
                <View style={{marginTop: 38}} />
                <MyTextInput
                  label="Password"
                  secureTextEntry
                  placeholder="Enter Password"
                  onChangeText={setPassword}
                  value={password}
                />
                {error && (
                  <ErrorText>{ERRORS.signin.passwordnotvalid}</ErrorText>
                )}
                <View style={{marginTop: 38}} />
                <MyButton
                  title="SIGN IN"
                  onPress={onLogin}
                  loading={loader}
                  //disabled={loader || disabled()}
                  disabled={loader}
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
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    textAlign: 'center',
    color: '#7B7B7B',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center'
  }
});
