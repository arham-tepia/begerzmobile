import React, {useEffect} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {FONTS} from '../../constants/fonts';
import {commonStyles} from '../../styles/styles';
import {SearchHeader} from './components/header';

export const SearchHomePage = () => {
  var searchInput: any;

  useEffect(() => {
    searchInput.focus();
  }, []);
  return (
    <View style={commonStyles.main}>
      <SearchHeader
        rightComponent={
          <TextInput
            ref={(input: any) => {
              searchInput = input;
            }}
            style={styles.ti}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ti: {
    height: 42,
    borderRadius: 16,
    backgroundColor: '#EEEEEE',
    color: '#171414',
    fontWeight: '600',
    fontFamily: FONTS.M_REGULAR,
    paddingHorizontal: 15
  }
});
