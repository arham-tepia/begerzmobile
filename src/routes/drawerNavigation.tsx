import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AccountRoutes} from './accountRoutes';
import {MyBegDashboard} from '../screens/account/begDashboard/myBegDash';
import {ArrowBackBlack} from '../components/icons/arowBackBlack';
import {FONTS} from '../constants/fonts';
import {MyDrawerDesign} from '../components/drawerDesign';
import {COLORS} from '../constants/colors';
import {PaymentAndWithdrawl} from '../screens/account/begDashboard/payments';
import {MyChipInsAndKarma} from '../screens/account/begDashboard/myChipins';
import {LeaderBoard} from '../screens/account/leaderboard/leaderboard';

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
      <DrawerTabs.Screen
        name="dr-payments"
        component={PaymentAndWithdrawl}
        options={{
          headerLeft: () => <ArrowBackBlack style={{marginLeft: 10}} />,
          headerTitle: 'Payments & Withdrawl',
          title: 'Payments & Withdrawl'
        }}
      />
      <DrawerTabs.Screen
        name="dr-myChipins"
        component={MyChipInsAndKarma}
        options={{
          headerLeft: () => <ArrowBackBlack style={{marginLeft: 10}} />,
          headerTitle: 'My Chip-Ins & Karma Points',
          title: 'My Chip-Ins & Karma Points'
        }}
      />
      <DrawerTabs.Screen
        name="dr-leaderboard"
        component={LeaderBoard}
        options={{
          headerLeft: () => <ArrowBackBlack style={{marginLeft: 10}} />,
          headerTitle: 'Leader Board',
          title: 'Leader Board'
        }}
      />
    </DrawerTabs.Navigator>
  );
};
