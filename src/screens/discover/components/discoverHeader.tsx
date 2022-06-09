import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {FilterIcon} from '../../../components/icons/filterIcon';

interface Props {
  leftComponent?: any;
}

export const DiscoverHeader = (props: Props) => {
  return (
    <View style={styles.headerStyles}>
      <SafeAreaView style={styles.main}>
        <View style={{width: '90%', borderWidth: 0}}>
          {props.leftComponent}
        </View>
        <View
          style={{
            borderWidth: 0,
            width: '10%',
            alignItems: 'flex-end',
            justifyContent: 'center'
          }}>
          <FilterIcon />
        </View>
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
    justifyContent: 'space-between',
    width: '90%',
    backgroundColor: 'white'
  },
  headerStyles: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%'
  }
});
