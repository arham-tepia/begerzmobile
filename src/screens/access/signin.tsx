import React, {useState} from 'react';
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
import {post} from '../../api/requestStructure';
import {MyButton} from '../../components/myButton';
import {MyTextInput} from '../../components/myTextinput';
import {COLORS} from '../../constants/colors';
import {commonStyles} from '../../styles/styles';
import {AccessHeading} from './components/heading';

export const Signin = ({navigation}: any) => {
  const [email, setEmail]: any = useState('');
  const [password, setPassword]: any = useState('');
  const [loader, setLoader]: any = useState(false);
  var subtext =
    'Welcome to Begerz, Please put your credentials below to start using the app.';

  async function onLogin() {
    setLoader(true);
    const data = {
      username: email.trim(),
      password: password.trim(),
      role: 'customer'
    };
    console.log(data, 'data');

    const authurl = 'auth/v1/';
    const endpoint = authurl + 'login';
    const res = await post(endpoint, data).finally(() => setLoader(false));
    console.log(res, 'response');
    if (res._id !== undefined) {
      navigation.replace('mainBottomNavigation');
    }
  }
  function disabled() {
    return email.length < 8 || password.length < 8;
  }
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
                onChangeText={setEmail}
                value={email}
              />
              <View style={{marginTop: 38}} />
              <MyTextInput
                label="Password"
                secureTextEntry
                placeholder="Enter Password"
                onChangeText={setPassword}
                value={password}
              />
              <View style={{marginTop: 38}} />
              <MyButton
                title="SIGN IN"
                onPress={onLogin}
                loading={loader}
                disabled={loader || disabled()}
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
    color: '#7B7B7B'
  }
});
