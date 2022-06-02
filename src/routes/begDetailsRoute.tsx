import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationHeader} from '../components/navigationHeader';
import {BegDetails} from '../screens/beg/details/begDetails';

const Stack = createNativeStackNavigator();

export const BegDetailsStack = ({route}: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'white'}
        //headerShown: false
      }}>
      <Stack.Screen
        name="begDetails"
        component={BegDetails}
        initialParams={route}
        options={(navigation: any) => ({
          header: () => <NavigationHeader />
        })}
      />
    </Stack.Navigator>
  );
};
