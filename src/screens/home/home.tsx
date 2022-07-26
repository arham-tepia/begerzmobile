import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  View,
  FlatList,
  Dimensions
} from 'react-native';
import {getAllBegs} from '../../api/beg';
import {getSuccessStories} from '../../api/success';
import {isTokenExpired} from '../../helpers/tokenManagement';
import {HomeBegNew} from './components/homeBegNew';
import {SuccessStories} from './components/successStories';

export const Home = ({navigation}: any) => {
  const [begs, setBegs]: any = useState([]);
  const [loader, setLoader]: any = useState(false);
  const [storyLoader, setStoryLoader]: any = useState(false);
  const [footerLoader, seFootertLoader]: any = useState(false);
  const [stories, setStories]: any = useState([]);

  const [pagination, setPagination]: any = useState([]);
  async function GetData() {
    const additional = '?page=1' + '&sort=-createdAt';
    setLoader(true);
    const res = await getAllBegs(additional).finally(() => setLoader(false));
    if (res.results !== undefined) {
      setBegs(res.results);
      setPagination(res.pagination);
    }
  }

  async function getStories() {
    setStoryLoader(true);
    const res = await getSuccessStories().finally(() => setStoryLoader(false));
    setStories(res.results);
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
    getStories();
  }, []);
  const renderBegs = ({item}: any) => {
    return (
      <HomeBegNew
        //noGradient
        onPress={() => navigation.navigate('home-begDetailsStack', {beg: item})}
        data={item}
      />
    );
  };
  const getItemLayout = (data: any, index: number) => ({
    length: 333,
    offset: 333 * index,
    index
  });

  async function c() {
    const x = await isTokenExpired();
    console.log(x ? 'Expired' : 'not expired');
  }

  return (
    <View style={styles.main}>
      <FlatList
        refreshing={loader}
        data={begs}
        keyExtractor={(item, index) => item._id}
        ListHeaderComponent={() => (
          <>
            {!storyLoader && (
              <SuccessStories navigation={navigation} stories={stories} />
            )}
          </>
        )}
        ListFooterComponent={() => (
          <>{footerLoader && <ActivityIndicator size={'small'} />}</>
        )}
        style={{width: '100%'}}
        initialNumToRender={5}
        renderItem={renderBegs}
        onEndReached={onEndReached}
        getItemLayout={getItemLayout}
        //maxToRenderPerBatch={9}
        windowSize={Dimensions.get('window').height * 2}
        //windowSize={3}
        disableVirtualization
        removeClippedSubviews
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
