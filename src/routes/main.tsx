import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccessStack} from './access';
import {NavigationContainer} from '@react-navigation/native';
import {PostBegStack} from './postBeg';
import {MainBottomNavigation} from './bottomNavigation';
import {Splash} from '../screens/access/splash';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen name="accessStack" component={AccessStack} />
        <Stack.Screen
          name="mainBottomNavigation"
          component={MainBottomNavigation}
        />
        {/* <Stack.Screen name="postBeg" component={PostBegStack} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
