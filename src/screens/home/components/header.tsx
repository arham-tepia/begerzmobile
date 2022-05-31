import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {ArrowBackBlack} from '../../../components/icons/arowBackBlack';
import {FONTS} from '../../../constants/fonts';

interface Props {
  rightComponent?: any;
}

export const SearchHeader = (props: Props) => {
  return (
    <View style={styles.headerStyles}>
      <SafeAreaView style={styles.main}>
        <View
          style={{
            borderWidth: 0,
            width: '10%',
            alignItems: 'flex-start',
            justifyContent: 'center'
          }}>
          <ArrowBackBlack />
        </View>
        <View style={{width: '90%', borderWidth: 0}}>
          {props.rightComponent}
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
