import React, {useState} from 'react';
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
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {ConvertDateToObject} from '../../helpers/simplifyDateObject';
import {createNewAccount} from '../../api/accounts';
import {post} from '../../api/requestStructure';
import {SERVER_URL} from '../../api/url';

export const Signup = ({navigation}: any) => {
  const [datePicker, setDatePicker]: any = useState(false);
  const [fname, setFname]: any = useState('');
  const [lname, setLname]: any = useState('');
  const [email, setEmail]: any = useState('');
  const [password, setPassword]: any = useState('');
  const [loader, setLoader]: any = useState(false);
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
    setLoader(true);
    const dob = dateObj.year + '-' + dateObj.monthNumber + '-' + dateObj.date;
    setLoader(true);
    const data = {
      username: email.trim(),
      password: password,
      firstName: fname.trim(),
      lastName: lname.trim(),
      email: email.trim(),
      birthdate: '2005-04-21', //hardcoded
      role: 'customer',
      rights: ['full'],
      status: 'active',
    };
    const res = await createNewAccount(data).finally(() => setLoader(false));
    navigation.navigate('signin');
  }
  function disabled() {
    return (
      email.length < 8 ||
      password.length < 8 ||
      fname.length < 2 ||
      lname.length < 2
    );
  }
  return (
    <>
      <View style={[commonStyles.main]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : 'height'}
          style={{marginTop: 21}}>
          <ScrollView style={{width: '100%'}}>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                alignSelf: 'center',
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
            <Text onPress={() => {}} style={{color: COLORS.primary}}>
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
    </>
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
