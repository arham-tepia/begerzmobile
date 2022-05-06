import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CalendarIcon} from '../../../components/icons/calendar';
import {InfoIcon} from '../../../components/icons/info';
import {LinkIcon} from '../../../components/icons/linkIcon';
import {MyButton} from '../../../components/myButton';
import {MyTextInput} from '../../../components/myTextinput';
import {FONTS} from '../../../constants/fonts';
import {commonStyles} from '../../../styles/styles';
import {BegAmountInput} from './components/begAmountInput';
import {BegHeadings} from './components/begHeadings';
import {Divider} from './components/divider';
import {UploadPhoto} from './components/uploadPhoto';

export const CreateBeg = ({navigation}: any) => {
  const [title, setTitle]: any = useState('');
  var minGoal = 'Minimum goal is $50.00';
  var addSubtext = 'A great video helps convince people to chip in!';
  var n1 =
    'A 4% processing fee is collected by Begerz.com for using their platform.';
  var n2 =
    '5% of the 4% transaction fee (what was collected) will be donated to 1 of 4 charities (pre-determined by Begerz.com).';
  return (
    <View style={[commonStyles.main]}>
      <ScrollView style={{width: '100%'}}>
        <View style={{width: '90%', marginTop: 20, alignSelf: 'center'}}>
          <BegHeadings>Enter Beg Amount</BegHeadings>
          <BegAmountInput viewStyle={{marginTop: 12}} />
          <Text style={styles.minGoalText}>{minGoal}</Text>
          <View style={{marginBottom: 48}} />
          <MyTextInput
            placeholder="Title of Beg"
            style={{fontFamily: FONTS.P_REGULAR}}
            containerStyle={styles.titleTi}
            maxLength={48}
            onChangeText={setTitle}
            rightComponent={
              <Text
                style={{
                  fontFamily: FONTS.P_MEDIUM,
                  fontSize: 16,
                  color: '#7B7B7B',
                }}>
                {48 - title.length}
              </Text>
            }
          />
          <View style={{marginBottom: 16}} />
          <MyTextInput
            placeholder="DD/MM/YY"
            style={{fontFamily: FONTS.P_REGULAR}}
            containerStyle={styles.titleTi}
            rightComponent={<CalendarIcon />}
          />
          <Text
            style={{
              fontFamily: FONTS.P_REGULAR,
              fontSize: 10,
              color: '#3B3E44',
            }}>
            Set End Date <InfoIcon />
          </Text>
          <View style={{marginBottom: 16}} />
          <BegHeadings>Add a video or photo</BegHeadings>
          <Text style={styles.addSubtext}>{addSubtext}</Text>
          <View style={{marginBottom: 24}} />
          <MyButton
            title="Add video"
            textStyles={{fontFamily: FONTS.P_SEMIBOLD, letterSpacing: 0}}
            leftComponent={<LinkIcon />}
          />
          <Divider style={{marginVertical: 12}} />
          <UploadPhoto />
          <View style={{marginBottom: 32}} />
          <MyButton
            title="Continue"
            textStyles={{fontFamily: FONTS.P_SEMIBOLD, letterSpacing: 0}}
          />
          <View style={{marginBottom: 24}} />
          <Text style={styles.noteText}>{n1}</Text>
          <View style={{marginBottom: 16}} />
          <Text style={styles.noteText}>{n2}</Text>
        </View>
      </ScrollView>
      <View style={{marginTop: 30}} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    shadowColor: 'red',
    shadowOffset: {
      width: -3,
      height: -3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  minGoalText: {
    color: '#7B7B7B',
    fontSize: 12,
    fontFamily: FONTS.P_MEDIUM,
    marginTop: 4,
  },
  titleTi: {
    borderRadius: 8,
    borderColor: 'rgba(40, 56, 62, 0.8)',
  },
  addSubtext: {
    color: '#28383ECC',
    fontFamily: FONTS.P_REGULAR,
    fontSize: 12,
    marginTop: 4,
  },
  noteText: {
    color: 'rgba(40, 56, 62, 0.8)',
    fontSize: 12,
    lineHeight: 18,
    fontFamily: FONTS.M_MEDIUM,
  },
});
