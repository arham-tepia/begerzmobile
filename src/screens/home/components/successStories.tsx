import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {getSuccessStories} from '../../../api/success';
import {MyTextMulish} from '../../../components/textMulish';
import {Story} from './story';

const SuccessText = () => {
  return (
    <View style={styles.successTextView}>
      <MyTextMulish
        style={{
          fontWeight: '700',
          fontSize: 8,
          transform: [{rotate: '-90deg'}],
          width: 84,
          textAlign: 'center'
        }}>
        SUCCESS STORIES
      </MyTextMulish>
    </View>
  );
};

export const SuccessStories = ({navigation}: any) => {
  const [stories, setStories]: any = useState([]);
  const [loading, setLoading]: any = useState(false);
  async function getData() {
    setLoading(true);
    const res = await getSuccessStories().finally(() => setLoading(false));
    setStories(res.results);
  }
  useEffect(() => {
    getData();
  }, []);

  const renderStories = ({item}: any) => {
    return <Story data={item} navigation={navigation} />;
  };

  return (
    <View style={styles.main}>
      <FlatList
        data={stories}
        renderItem={renderStories}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => {
          return !loading ? <SuccessText /> : <></>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
    backgroundColor: '#FBFAFA'
  },
  successTextView: {
    width: 39,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});
