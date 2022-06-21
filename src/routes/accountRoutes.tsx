import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationHeader} from '../components/navigationHeader';
import {ProfileMain} from '../screens/profile/profile';
import {MyProfile} from '../screens/account/profile/myProfile';
import {FONTS} from '../constants/fonts';
import {ArrowBackBlack} from '../components/icons/arowBackBlack';
import {MyBegDashboard} from '../screens/account/begDashboard/myBegDash';

const Stack = createNativeStackNavigator();

export const AccountRoutes = () => {
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
        name="profile-main"
        component={ProfileMain}
        options={(navigation: any) => ({
          header: props => <NavigationHeader rightComponent={() => null} />
        })}
      />
      <Stack.Screen
        name="myProfile"
        component={MyProfile}
        options={{
          headerLeft: () => <ArrowBackBlack />,
          headerTitle: 'My Profile'
        }}
      />
      <Stack.Screen
        name="myBegDashboard"
        component={MyBegDashboard}
        options={{
          headerLeft: () => <ArrowBackBlack />,
          headerTitle: 'My Beg Dashboard'
        }}
      />
    </Stack.Navigator>
  );
};