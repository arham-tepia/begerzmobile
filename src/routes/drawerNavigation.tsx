import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image, SafeAreaView} from 'react-native';
import {ICONS} from '../constants/icons';
import {AccountRoutes} from './accountRoutes';
import {MyBegDashboard} from '../screens/account/begDashboard/myBegDash';
import {ArrowBackBlack} from '../components/icons/arowBackBlack';
import {FONTS} from '../constants/fonts';
import {MyDrawerDesign} from '../components/drawerDesign';
import {COLORS} from '../constants/colors';

const DrawerTabs = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <DrawerTabs.Navigator
      drawerContent={props => <MyDrawerDesign {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        headerStyle: {backgroundColor: 'white'},
        headerTitleStyle: {
          fontFamily: FONTS.M_REGULAR,
          fontSize: 20,
          fontWeight: '700'
        },
        headerShadowVisible: true,
        drawerActiveTintColor: COLORS.primary,
        drawerLabelStyle: {fontFamily: FONTS.M_REGULAR}
      }}>
      <DrawerTabs.Screen
        name="dr-profile"
        component={AccountRoutes}
        options={{title: 'Profile', headerShown: false}}
      />
      <DrawerTabs.Screen
        name="dr-begDashboard"
        component={MyBegDashboard}
        options={{
          headerLeft: () => <ArrowBackBlack style={{marginLeft: 10}} />,
          headerTitle: 'My Beg Dashboard',
          title: 'My Beg Dashboard'
        }}
      />
    </DrawerTabs.Navigator>
  );
};
