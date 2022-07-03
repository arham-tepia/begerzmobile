import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  ActivityIndicator
} from 'react-native';
import {textSearchForBegs} from '../../api/beg';
import {MyTextMontserrat} from '../../components/textMontserrat';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';
import {commonStyles} from '../../styles/styles';
import {SearchHeader} from './components/header';
import {HomeBeg} from './components/homeBeg';

export const SearchHomePage = ({navigation}: any) => {
  var searchInput: any;
  const [search, setSearch]: any = useState('');
  const [results, setResults]: any = useState([]);
  const [loader, setLoader]: any = useState(false);

  useEffect(() => {
    searchInput.focus();
  }, []);

  async function onSearch(text: string) {
    setSearch(text);
    setLoader(true);
    const res = await textSearchForBegs(text).finally(() => setLoader(false));
    console.log(res, 'Response Search');
    setResults(res.results);
  }

  function renderResults({item}: any) {
    return (
      <HomeBeg
        data={item}
        onPress={() => navigation.navigate('home-begDetailsStack', {beg: item})}
      />
    );
  }

  return (
    <View style={commonStyles.main}>
      <SearchHeader
        rightComponent={
          <TextInput
            ref={(input: any) => {
              searchInput = input;
            }}
            style={styles.ti}
            onChangeText={onSearch}
          />
        }
      />
      <MyTextMontserrat style={{marginTop: 15, width: '90%'}}>
        Showing results for{' '}
        <MyTextMontserrat style={{color: COLORS.primary}}>
          {search}
        </MyTextMontserrat>
      </MyTextMontserrat>
      {loader && (
        <ActivityIndicator style={{marginTop: 10}} color={COLORS.primary} />
      )}
      <FlatList
        renderItem={renderResults}
        data={results}
        initialNumToRender={5}
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
