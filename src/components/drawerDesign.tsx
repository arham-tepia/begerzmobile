import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {DrawerItemList} from '@react-navigation/drawer';
import {useEffect} from 'react';
import {BrandingMain} from './branding';
import {useStore} from 'react-redux';
import rememberMeAction from '../redux/action/rememberMeAction';
import {useNavigation} from '@react-navigation/native';
import {MyButton} from './myButton';
import {Margin} from './margin';
import {FONTS} from '../constants/fonts';

export const MyDrawerDesign = (props: any) => {
  const navigation: any = useNavigation();
  const store = useStore();
  function onLogout() {
    store.dispatch(
      rememberMeAction({
        email: '',
        password: '',
        rememberMe: false
      })
    );
    navigation.replace('accessStack');
  }

  useEffect(() => {}, []);
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.head}>
        <BrandingMain />
      </SafeAreaView>
      <ScrollView>
        <View
          style={{
            marginTop: '30%'
          }}>
          <DrawerItemList {...props} />
        </View>
      </ScrollView>
      <MyButton
        style={styles.btn}
        title="Log out"
        textStyles={styles.text}
        onPress={onLogout}
      />
      <Margin top margin={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30%'
  },
  btn: {
    width: '80%',
    alignSelf: 'center'
  },
  text: {
    fontFamily: FONTS.M_REGULAR,
    fontSize: 15,
    fontWeight: '700'
  }
});
