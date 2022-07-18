import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationHeader} from '../components/navigationHeader';
import {BegDetails} from '../screens/beg/details/begDetails';
import {BegComments} from '../screens/beg/details/comments';
import {ArrowBackBlack} from '../components/icons/arowBackBlack';
import {SendIcon} from '../components/icons/sendIcon';
import {MyTextMulish} from '../components/textMulish';
import {ChipinStack} from './chipinRoutes';
import {BegerProfile} from '../screens/beg/details/begerProfile';
import {StoryDetails} from '../screens/beg/details/storyDetails';
import {Donators} from '../screens/beg/details/donators';
import {View} from 'react-native';

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
      <Stack.Screen
        name="begComments"
        component={BegComments}
        options={(navigation: any) => ({
          header: () => (
            <NavigationHeader
              leftComponent={<ArrowBackBlack />}
              rightComponent={<SendIcon style={{marginRight: 16}} />}
              centerComponent={
                <MyTextMulish style={{fontSize: 20, fontWeight: '700'}}>
                  Comments
                </MyTextMulish>
              }
            />
          )
        })}
      />
      <Stack.Screen
        name="details-begerProfile"
        component={BegerProfile}
        options={(navigation: any) => ({
          headerShown: false
        })}
      />
      <Stack.Screen
        name="details-chipin"
        component={ChipinStack}
        options={(navigation: any) => ({
          headerShown: false
        })}
      />
      <Stack.Screen
        name="details-donators"
        component={Donators}
        options={(navigation: any) => ({
          header: () => (
            <NavigationHeader
              leftComponent={<ArrowBackBlack />}
              rightComponent={<View style={{marginRight: 40}} />}
              centerComponent={
                <MyTextMulish style={{fontSize: 20, fontWeight: '700'}}>
                  Donators
                </MyTextMulish>
              }
            />
          )
        })}
      />
    </Stack.Navigator>
  );
};
