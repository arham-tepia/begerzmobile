import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ArrowRight} from '../../components/icons/arrowRight';
import {MyTextPoppins} from '../../components/textPoppins';
import {COLORS} from '../../constants/colors';
import {commonStyles} from '../../styles/styles';

export const ProfileMain = ({navigation}: any) => {
  return (
    <View style={commonStyles.main}>
      <View style={{marginTop: 40}} />
      <TouchableOpacity
        onPress={() => navigation.navigate('myProfile')}
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 50,
          borderRadius: 5,
          borderWidth: 0.5,
          borderColor: 'grey',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 20
        }}>
        <MyTextPoppins style={{color: COLORS.primary}}>
          My Profile
        </MyTextPoppins>
        <ArrowRight />
      </TouchableOpacity>
    </View>
  );
};
