import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard
} from 'react-native';
import {textSearchForBegs} from '../../api/beg';
import {MyTextMontserrat} from '../../components/textMontserrat';
import {COLORS} from '../../constants/colors';
import {FONTS} from '../../constants/fonts';
import {commonStyles} from '../../styles/styles';
import {HomeBeg} from '../home/components/homeBeg';
import {DiscoverCover} from './components/cover';
import {DiscoverHeader} from './components/discoverHeader';
import {DiscoverTrend} from './components/discoverTrend';

export const Discover = ({navigation}: any) => {
  const tags = ['charity', 'vacation', 'travel'];
  const [search, setSearch]: any = useState('');
  const [results, setResults]: any = useState([]);
  const [loader, setLoader]: any = useState(false);
  function mapTags(item: any) {
    return (
      <DiscoverTrend
        tag={item}
        navigation={navigation}
        onViewAllPress={() => onViewAllPress(item)}
      />
    );
  }
  async function onSearch(text: string) {
    setSearch(text);
    setLoader(true);
    if (text.length >= 1) {
      const res = await textSearchForBegs({terms: text}).finally(() =>
        setLoader(false)
      );
      console.log(res, 'Response Search');
      setResults(res.results);
    } else {
      setResults([]);
    }
  }

  function renderResults({item}: any) {
    return (
      <HomeBeg
        data={item}
        onPress={() => navigation.navigate('home-begDetailsStack', {beg: item})}
      />
    );
  }

  function onViewAllPress(tag: string) {
    console.log(tag);
    onSearch(tag);
  }

  return (
    // <TouchableWithoutFeedback
    // onPress={Keyboard.dismiss} accessible={false}>
    <View style={commonStyles.main}>
      <DiscoverHeader
        leftComponent={
          <TextInput style={styles.ti} onChangeText={onSearch} value={search} />
        }
      />
      {results.length > 1 && (
        <MyTextMontserrat style={{marginTop: 15, width: '90%'}}>
          Showing results for{' '}
          <MyTextMontserrat style={{color: COLORS.primary}}>
            {search}
          </MyTextMontserrat>
        </MyTextMontserrat>
      )}
      {results.length >= 1 && (
        <FlatList
          renderItem={renderResults}
          data={results}
          initialNumToRender={5}
        />
      )}
      {results.length < 1 && (
        <ScrollView style={{width: '90%', marginTop: 10}}>
          {/* <DiscoverCover /> */}
          {tags.map(mapTags)}
          {/* <DiscoverTrend />
        <DiscoverTrend /> */}
        </ScrollView>
      )}
    </View>
    // </TouchableWithoutFeedback>
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
