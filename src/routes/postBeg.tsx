import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateBeg} from '../screens/beg/post/createBeg';
import {ArrowBackBlack} from '../components/icons/arowBackBlack';
import {FONTS} from '../constants/fonts';
import {BulbIcon} from '../components/icons/bulb';
import {View} from 'react-native';
import {TellYourStory} from '../screens/beg/post/begStory';
import {BegIsReady} from '../screens/beg/post/begReady';
import {ShareBegWithFollowers} from '../screens/beg/post/shareWithFollowers';
import {ShareBegOnSocialMedia} from '../screens/beg/post/shareOnSocialmedia';

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
      <Stack.Screen
        name="tellYourStory"
        component={TellYourStory}
        options={{
          headerLeft: () => <ArrowBackBlack />,
          headerTitle: 'Create Beg',
          headerRight: () => <BulbIcon />,
        }}
      />
      <Stack.Screen
        name="begIsReady"
        component={BegIsReady}
        options={{
          headerLeft: () => <ArrowBackBlack />,
          headerTitle: 'Create Beg',
          headerRight: () => <BulbIcon />,
        }}
      />
      <Stack.Screen
        name="shareWithFollowers"
        component={ShareBegWithFollowers}
        options={{
          headerLeft: () => <ArrowBackBlack />,
          headerTitle: 'Create Beg',
          headerRight: () => <BulbIcon />,
        }}
      />
      <Stack.Screen
        name="shareOnSocial"
        component={ShareBegOnSocialMedia}
        options={{
          headerLeft: () => <ArrowBackBlack />,
          headerTitle: 'Create Beg',
          headerRight: () => <BulbIcon />,
        }}
      />
    </Stack.Navigator>
  );
};
