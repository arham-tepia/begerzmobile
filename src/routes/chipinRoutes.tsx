import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ArrowBackBlack} from '../components/icons/arowBackBlack';
import {FONTS} from '../constants/fonts';
import {Chipin} from '../screens/beg/give/chipin';
import {ChipReceipt} from '../screens/beg/give/chipReceipt';
import {ChipReact} from '../screens/beg/give/chipReact';

const Stack = createNativeStackNavigator();

export const ChipinStack = ({route}: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'white'},
        headerTitleStyle: {
          fontFamily: FONTS.P_SEMIBOLD,
          fontSize: 20
        },
        headerShadowVisible: true
      }}>
      <Stack.Screen
        name="chipin-main"
        component={Chipin}
        initialParams={route.params}
        options={{
          headerLeft: () => <ArrowBackBlack />,
          headerTitle: 'Chip In'
        }}
      />
      <Stack.Screen
        name="chipin-receipt"
        component={ChipReceipt}
        options={{
          headerLeft: () => <ArrowBackBlack />,
          headerTitle: 'Chip In'
        }}
      />
      <Stack.Screen
        name="chipin-react"
        component={ChipReact}
        options={{
          headerLeft: () => <ArrowBackBlack />,
          headerTitle: 'Chip In'
        }}
      />
    </Stack.Navigator>
  );
};
