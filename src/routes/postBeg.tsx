import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateBeg} from '../screens/beg/post/createBeg';
import {ArrowBackBlack} from '../components/icons/arowBackBlack';
import {FONTS} from '../constants/fonts';
import {BulbIcon} from '../components/icons/bulb';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

export const PostBegStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'white'},
        headerTitleStyle: {
          fontFamily: FONTS.P_SEMIBOLD,
          fontSize: 20,
        },
        headerShadowVisible: true,
      }}>
      <Stack.Screen
        name="createBeg"
        component={CreateBeg}
        options={{
          headerLeft: () => <ArrowBackBlack />,
          headerTitle: 'Create Beg',
          headerRight: () => <BulbIcon />,
        }}
      />
    </Stack.Navigator>
  );
};
