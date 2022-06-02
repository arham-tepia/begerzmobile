import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationHeader} from '../components/navigationHeader';
import {BegDetails} from '../screens/beg/details/begDetails';
import {BegComments} from '../screens/beg/details/comments';
import {ArrowBackBlack} from '../components/icons/arowBackBlack';
import {SendIcon} from '../components/icons/sendIcon';
import {MyTextMulish} from '../components/textMulish';

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
    </Stack.Navigator>
  );
};
