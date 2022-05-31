import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native';
import {HomeSVG} from '../components/svgs/home';
import {SearchSVG} from '../components/svgs/search';
import {HeartSVG} from '../components/svgs/heart';
import {PersonSVG} from '../components/svgs/person';
import {COLORS} from '../constants/colors';
import {TabbarButton} from '../components/tabbarButton';
import {PostBegStack} from './postBeg';
import {HomeStack} from './homeRoutes';
import {Image} from 'react-native';
import {ICONS} from '../constants/icons';

const BottomTabs = createBottomTabNavigator();

const Test = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
      }}>
      <Image source={ICONS.noData} style={{height: '90%', width: '90%'}} />
    </SafeAreaView>
  );
};

export const MainBottomNavigation = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: 'black'
      }}>
      <BottomTabs.Screen
        name="bn-home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <HomeSVG color={color} focused={focused} />
          )
        }}
      />
      <BottomTabs.Screen
        name="bn-search"
        component={Test}
        options={{
          tabBarIcon: ({color, focused}) => (
            <SearchSVG color={color} focused={focused} />
          )
        }}
      />
      <BottomTabs.Screen
        name="bn-postBeg"
        component={PostBegStack}
        options={navigation => ({
          tabBarButton: props => <TabbarButton navigation={navigation} />
        })}
      />
      <BottomTabs.Screen
        name="bn-favorites"
        component={Test}
        options={{
          tabBarIcon: ({color, focused}) => (
            <HeartSVG color={color} focused={focused} />
          )
        }}
      />
      <BottomTabs.Screen
        name="bn-profile"
        component={Test}
        options={{
          tabBarIcon: ({color, focused}) => (
            <PersonSVG color={color} focused={focused} />
          )
        }}
      />
    </BottomTabs.Navigator>
  );
};
