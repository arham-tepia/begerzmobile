import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {getAllBegs} from '../../api/beg';
import {HomeBeg} from './components/homeBeg';
import {SuccessStories} from './components/successStories';

export const Home = () => {
  const [begs, setBegs]: any = useState([]);
  const [loader, setLoader]: any = useState(false);
  async function GetData() {
    setLoader(true);
    const res = await getAllBegs().finally(() => setLoader(false));
    if (res.results !== undefined) {
      setBegs(res.results);
    }
  }
  useEffect(() => {
    GetData();
  }, []);
  function renderBegs({item}: any) {
    return <HomeBeg data={item} />;
  }
  return (
    <View style={styles.main}>
      <FlatList
        data={begs}
        ListHeaderComponent={() => <SuccessStories />}
        initialNumToRender={5}
        renderItem={renderBegs}
        refreshControl={
          <RefreshControl refreshing={loader} onRefresh={GetData} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  }
});
