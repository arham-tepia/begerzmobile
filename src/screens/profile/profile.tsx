import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ArrowRight} from '../../components/icons/arrowRight';
import {MyTextPoppins} from '../../components/textPoppins';
import {COLORS} from '../../constants/colors';
import {commonStyles} from '../../styles/styles';

export const ProfileMain = ({navigation}: any) => {
  function Btn(props: {name?: string; navigateTo?: string}) {
    return (
      <TouchableOpacity
        // onPress={() => navigation.navigate('myBegDashboard')}
        onPress={() => navigation.navigate(props.navigateTo)}
        style={styles.btn}>
        <MyTextPoppins style={{color: COLORS.primary, fontSize: 20}}>
          {props.name}
        </MyTextPoppins>
        <ArrowRight />
      </TouchableOpacity>
    );
  }

  return (
    <View style={commonStyles.main}>
      <View style={{marginTop: 40}} />
      <Btn name="My Profile" navigateTo={'myProfile'} />
      <Btn name="My Beg Dashboard" navigateTo={'myBegDashboard'} />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '90%',
    alignSelf: 'center',
    height: 50,
    borderRadius: 5,
    //borderWidth: 0.5,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10
  }
});
