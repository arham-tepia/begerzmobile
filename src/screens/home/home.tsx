import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import {getAllBegs} from '../../api/beg';
import {MyButton} from '../../components/myButton';
import {HomeBeg} from './components/homeBeg';
import {SuccessStories} from './components/successStories';

export const Home = ({navigation}: any) => {
  const [begs, setBegs]: any = useState([]);
  const [loader, setLoader]: any = useState(false);
  const [footerLoader, seFootertLoader]: any = useState(false);
  const [pagination, setPagination]: any = useState([]);
  async function GetData() {
    const additional = '?page=1' + '&sort=-createdAt';
    setLoader(true);
    const res = await getAllBegs(additional).finally(() => setLoader(false));
    if (res.results !== undefined) {
      setBegs(res.results);
      setPagination(res.pagination);
    }
    console.log(res.pagination, 'response');
    console.log(res.results[0], 'response obj');
  }

  async function fetchBegs(page: any) {
    const additional = '?page=' + page + '&sort=-createdAt';
    seFootertLoader(true);
    const res = await getAllBegs(additional).finally(() =>
      seFootertLoader(false)
    );
    if (res !== undefined) {
      setPagination(res.pagination);
      setBegs([...begs, ...res.results]);
      // setBegs(begs.concat(res.results));
      //setBegs(res.results);
    }
    return res;
  }

  async function onEndReached() {
    console.log('onendreached called');
    if (pagination.current !== pagination.total) {
      const res = await fetchBegs(
        pagination.next.page ? pagination.next.page : '1'
      );
      return res;
    }
    return [];
  }

  useEffect(() => {
    GetData();
  }, []);
  function renderBegs({item}: any) {
    return (
      <HomeBeg
        onPress={() => navigation.navigate('home-begDetailsStack', {beg: item})}
        data={item}
      />
    );
  }
  const getItemLayout = (data: any, index: number) => ({
    length: 281.25,
    offset: 281.25 * index,
    index
  });
  async function onRefresh() {
    console.log('refreshed');
    const page = parseInt(pagination.current) - 1;
    if (pagination.current === '1') {
      fetchBegs(page);
    }
  }

  return (
    <View style={styles.main}>
      <FlatList
        refreshing={loader}
        data={begs}
        // onRefresh={onRefresh}
        keyExtractor={(item, index) => item._id}
        ListHeaderComponent={() => <SuccessStories navigation={navigation} />}
        ListFooterComponent={() => (
          <>{footerLoader && <ActivityIndicator size={'small'} />}</>
        )}
        initialNumToRender={10}
        renderItem={renderBegs}
        // onEndReached={onEndReached}
        // onEndReachedThreshold={0.2}
        // getItemLayout={getItemLayout}
        // maxToRenderPerBatch={10}
        // windowSize={10}
        // disableVirtualization
        // removeClippedSubviews
        refreshControl={
          <RefreshControl refreshing={loader} onRefresh={GetData} />
        }
      />
      {loader && <ActivityIndicator size={'small'} />}
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
