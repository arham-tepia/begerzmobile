import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {RootStateOrAny, useSelector, useStore} from 'react-redux';
import {loginUser} from '../../api/authentication';
import {COLORS} from '../../constants/colors';
import {ICONS} from '../../constants/icons';
import {storeToken} from '../../helpers/tokenManagement';
import {wait} from '../../helpers/wait';
import updateCurrentUserAction from '../../redux/action/currectUserAction';
import {commonStyles} from '../../styles/styles';

export const Splash = ({navigation}: any) => {
  const state = useSelector((state: RootStateOrAny) => state.rememberMe);
  const store = useStore();
  async function check() {
    console.log(state, 'State');
    if (state.rememberMe) {
      const data = {
        username: state.email.trim(),
        password: state.password.trim(),
        role: 'customer'
      };
      const res = await loginUser(data).catch(e => {
        console.log(e, 'This is error');
      });
      console.log(res, 'response');
      if (res === undefined) {
        navigation.navigate('accessStack');
      }
      if (res._id !== undefined) {
        storeToken(res.accessToken);
        store.dispatch(
          updateCurrentUserAction({
            id: res._id
          })
        );
        navigation.replace('mainBottomNavigation');
      }
    } else {
      wait(1000).then(() => {
        navigation.navigate('accessStack');
      });
    }
  }

  useEffect(() => {
    check();
  }, []);
  return (
    <View
      style={[
        commonStyles.main,
        {justifyContent: 'center', backgroundColor: COLORS.primary}
      ]}>
      <Image source={ICONS.logoWhite} style={{width: 254.9, height: 78.95}} />
    </View>
  );
};
