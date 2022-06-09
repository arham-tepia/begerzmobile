import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationHeader} from '../components/navigationHeader';
import {Discover} from '../screens/discover/discover';

const Stack = createNativeStackNavigator();

export const DiscoverStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'white'}
      }}>
      <Stack.Screen
        name="discover"
        component={Discover}
        options={(navigation: any) => ({
          headerShown: false
        })}
      />
    </Stack.Navigator>
  );
};
