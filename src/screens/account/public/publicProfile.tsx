import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {commonStyles} from '../../../styles/styles';
import {NavigationHeader} from '../../../components/navigationHeader';
import {ArrowBackBlack} from '../../../components/icons/arowBackBlack';
import {MyTextMulish} from '../../../components/textMulish';
import {BegerProfileCard} from '../../beg/details/components/begerProfileCard';
import {MyButton} from '../../../components/myButton';
import {HomeBeg} from '../../home/components/homeBeg';
import {MenuIcon} from '../../../components/icons/menuIcon';
import {} from '@react-navigation/drawer';

export const PublicProfile = ({navigation}: any) => {
  return (
    <View style={[commonStyles.main, {backgroundColor: 'transparent'}]}>
      <View style={{width: '100%'}}>
        <NavigationHeader
          leftComponent={<ArrowBackBlack />}
          rightComponent={
            <MenuIcon
              style={{marginRight: 16}}
              onPress={() => navigation.openDrawer()}
            />
          }
          centerComponent={
            <MyTextMulish style={{fontSize: 20, fontWeight: '700'}}>
              User
            </MyTextMulish>
          }
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginTop: 10, width: '100%'}}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <BegerProfileCard />
          <MyButton
            inverse
            title="Edit Profile"
            onPress={() => navigation.navigate('myProfile')}
            style={{
              height: 36,
              borderRadius: 4,
              backgroundColor: 'transparent',
              borderColor: 'rgba(0, 0, 0, 0.12)'
            }}
          />
          <View style={{marginBottom: 20}} />
        </View>
        <HomeBeg
          data={{}}
          transparent
          hideUser
          onMorePress={() => navigation.navigate('begDashboard')}
        />
        <HomeBeg data={{}} transparent hideUser />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {}
});
