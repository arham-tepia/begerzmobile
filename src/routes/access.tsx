import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Signin} from '../screens/access/signin';
import {BrandingMain} from '../components/branding';
import {Signup} from '../screens/access/signup';
import {ArrowBack} from '../components/icons/arrowBack';
import {ForgotPassword} from '../screens/access/forgot';
import {ResetPassword} from '../screens/access/reset';
import {Splash} from '../screens/access/splash';

const Stack = createNativeStackNavigator();

export const AccessStack = () => {
  const options = {
    headerLeft: () => <ArrowBack />,
    headerTitle: () => <BrandingMain />,
  };

  return (
    <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: 'white'}}}>
      <Stack.Screen
        name="splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signin"
        component={Signin}
        options={{headerLeft: () => <BrandingMain />, headerTitle: ''}}
      />
      <Stack.Screen name="signup" component={Signup} options={options} />
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
