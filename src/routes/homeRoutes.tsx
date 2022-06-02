import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/home/home';
import {NavigationHeader} from '../components/navigationHeader';
import {SearchHomePage} from '../screens/home/search';
import {BegDetailsStack} from './begDetailsRoute';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'white'}
      }}>
      <Stack.Screen
        name="home"
        component={Home}
        options={(navigation: any) => ({
          header: props => <NavigationHeader />
        })}
      />
      <Stack.Screen
        name="home-search"
        component={SearchHomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home-begDetailsStack"
        component={BegDetailsStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
