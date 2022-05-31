import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Signin} from '../screens/access/signin';
import {BrandingMain} from '../components/branding';
import {Signup} from '../screens/access/signup';
import {ArrowBack} from '../components/icons/arrowBack';
import {ForgotPassword} from '../screens/access/forgot';
import {ResetPassword} from '../screens/access/reset';
import {Splash} from '../screens/access/splash';
import {NavigationHeader} from '../components/navigationHeader';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

export const AccessStack = () => {
  const options = {
    headerLeft: () => <ArrowBack />,
    headerTitle: () => <BrandingMain />
  };

  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="signin"
        component={Signin}
        // options={{headerLeft: () => <BrandingMain />, headerTitle: ''}}
        options={{
          header: () => (
            <NavigationHeader
              rightComponent={() => {
                return null;
              }}
            />
          )
        }}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{
          header: () => (
            <NavigationHeader
              leftComponent={<ArrowBack />}
              centerComponent={<BrandingMain />}
              rightComponent={<View style={{width: '10%'}} />}
            />
          )
        }}
      />
      <Stack.Screen
        name="forgotPassword"
        component={ForgotPassword}
        options={options}
      />
      <Stack.Screen
        name="resetPassword"
        component={ResetPassword}
        options={options}
      />
    </Stack.Navigator>
  );
};
