import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FONTS} from '../constants/fonts';
import {PaymentAndWithdrawl} from '../screens/account/begDashboard/payments';
import {WithdrawalSettings} from '../screens/account/withdrawal/withdrawalSettings';

const Stack = createNativeStackNavigator();

export const WithdrawalRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'white'},
        headerTitleStyle: {
          fontFamily: FONTS.M_REGULAR,
          fontSize: 20,
          fontWeight: '700'
        },
        headerShadowVisible: true
      }}>
      <Stack.Screen
        name="payments-settings"
        component={PaymentAndWithdrawl}
        options={(navigation: any) => ({
          headerShown: false
        })}
      />
      <Stack.Screen
        name="payments-withdrawalSettings"
        component={WithdrawalSettings}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};
