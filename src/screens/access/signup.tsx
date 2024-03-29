import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {MyButton} from '../../components/myButton';
import {MyTextInput} from '../../components/myTextinput';
import {COLORS} from '../../constants/colors';
import {ICONS} from '../../constants/icons';
import {commonStyles} from '../../styles/styles';
import {AccessHeading} from './components/heading';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {ConvertDateToObject} from '../../helpers/simplifyDateObject';
import {createNewAccount} from '../../api/accounts';
import {ErrorText} from '../../components/errorText';
import {ERRORS} from '../../helpers/errors';
import Toast from 'react-native-toast-message';
import {wait} from '../../helpers/wait';

export const Signup = ({navigation}: any) => {
  const [datePicker, setDatePicker]: any = useState(false);
  const [fname, setFname]: any = useState('');
  const [lname, setLname]: any = useState('');
  const [email, setEmail]: any = useState('');
  const [username, setUsername]: any = useState('');
  const [password, setPassword]: any = useState('');
  const [loader, setLoader]: any = useState(false);
  const [error, setError]: any = useState(false);
  const [date, setDate] = useState(new Date());
  var subtext =
    'Welcome to Begerz, Please put your credentials below to start using the app.';

  function CalendarIcon(props: {onPress?(): void}) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <Image source={ICONS.calendar} style={{width: 18, height: 18.42}} />
      </TouchableOpacity>
    );
  }
  const handleDate = (date: Date) => {
    setDate(date);
    setDatePicker(false);
  };

  const dateObj = ConvertDateToObject(date);

  async function onRegister() {
    setError(false);
    setLoader(true);
    const dob = dateObj.year + '-' + dateObj.monthNumber + '-' + dateObj.date;
    setLoader(true);
    const data = {
      username: username.trim(),
      password: password,
      firstName: fname.trim(),
      lastName: lname.trim(),
      email: email.trim(),
      birthdate: '2005-04-21', //hardcoded
      role: 'customer',
      rights: ['full'],
      status: 'active'
    };
    const res = await createNewAccount(data).finally(() => setLoader(false));
    console.log(res, 'signup response');
    if (res.message === 'username and email must be unique') {
      setError(true);
    }
    if (res.userId) {
      Toast.show({
        type: 'success',
        text1: 'Account created successfully',
        text2: 'Sign in to continue.'
      });

      wait(3000).finally(() => {
        navigation.navigate('signin');
      });
    }
  }
  function disabled() {
    return (
      email.length < 8 ||
      password.length < 8 ||
      fname.length < 2 ||
      lname.length < 2
    );
  }
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 0;

  return (
    <>
      <View style={[commonStyles.main]}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={keyboardVerticalOffset}
          behavior="padding"
          style={{marginTop: 21}}>
          <ScrollView style={{width: '100%'}}>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                alignSelf: 'center'
              }}>
              <View style={{width: '95%'}}>
                <AccessHeading>Sign Up</AccessHeading>
                <Text style={styles.subtext}>{subtext}</Text>
                <View style={{marginTop: 38}} />
                <MyTextInput
                  label="First Name"
                  placeholder="Enter First Name"
                  onChangeText={setFname}
                  value={fname}
                />

                <View style={{marginTop: 38}} />
                <MyTextInput
                  label="Last Name"
                  placeholder="Enter Last Name"
                  onChangeText={setLname}
                  value={lname}
                />
                <View style={{marginTop: 38}} />
                <MyTextInput
                  label="Email Address"
                  placeholder="Enter Email Address"
                  onChangeText={setEmail}
                  value={email}
                />
                <View style={{marginTop: 38}} />
                <MyTextInput
                  label="Username"
                  placeholder="Enter Username"
                  onChangeText={setUsername}
                  value={username}
                />
                {error && (
                  <ErrorText>{ERRORS.signup.emailalreadytaken}</ErrorText>
                )}
                <View style={{marginTop: 38}} />
                <MyTextInput
                  label="Password"
                  secureTextEntry
                  placeholder="Enter Password"
                  onChangeText={setPassword}
                  value={password}
                />
                <View style={{marginTop: 38}} />
                <MyTextInput
                  label="Birthdate"
                  placeholder="Choose Date"
                  value={
                    dateObj.month + ' ' + dateObj.date + ', ' + dateObj.year
                  }
                  editable={false}
                  rightComponent={
                    <CalendarIcon onPress={() => setDatePicker(true)} />
                  }
                />
                <View style={{marginTop: 38}} />
                <MyButton
                  title="SIGN UP"
                  onPress={onRegister}
                  disabled={disabled() || loader}
                />
              </View>
            </View>
          </ScrollView>
          <Text style={styles.bottomText}>
            {'Already have an account? '}{' '}
            <Text
              onPress={() => navigation.navigate('signin')}
              style={{color: COLORS.primary}}>
              Sign In
            </Text>
          </Text>
        </KeyboardAvoidingView>
      </View>
      <DateTimePickerModal
        isVisible={datePicker}
        mode="date"
        onConfirm={handleDate}
        onCancel={() => setDatePicker(false)}
      />
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
    marginBottom: 20
  }
});
