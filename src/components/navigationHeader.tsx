import React from 'react';
import {BrandingMain} from './branding';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {ExploreIcon} from './icons/exploreIcon';
import {SearchIcon} from './icons/searchIcon';
import {useNavigation} from '@react-navigation/native';

interface Props {
  leftComponent?: any;
  rightComponent?: any;
  centerComponent?: any;
}

export const NavigationHeader = (props: Props) => {
  const navigation: any = useNavigation();
  const headerStyles = {
    alignItem: 'center',
    backgroundColor: 'white'
  };

  return (
    <View style={headerStyles}>
      <SafeAreaView style={styles.main}>
        <View style={{marginLeft: 16}}>
          {!props.leftComponent ? <BrandingMain /> : props.leftComponent}
        </View>
        {props.centerComponent ? props.centerComponent : null}
        {!props.rightComponent ? (
          <View style={{flexDirection: 'row', marginRight: 19.74}}>
            <ExploreIcon styles={{marginRight: 25}} />
            <SearchIcon onPress={() => navigation.navigate('home-search')} />
          </View>
        ) : (
          props.rightComponent
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    borderColor: 'red',
    height: 106,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
