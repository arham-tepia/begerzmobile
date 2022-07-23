import React, {useEffect, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import {commonStyles} from '../../../styles/styles';
import {NavigationHeader} from '../../../components/navigationHeader';
import {ArrowBackBlack} from '../../../components/icons/arowBackBlack';
import {MyTextMulish} from '../../../components/textMulish';
import {BegerProfileCard} from '../../beg/details/components/begerProfileCard';
import {MyButton} from '../../../components/myButton';
import {HomeBeg} from '../../home/components/homeBeg';
import {MenuIcon} from '../../../components/icons/menuIcon';
import {RootStateOrAny, useSelector} from 'react-redux';
import {getUserInformationById} from '../../../api/user';
import {getAllBegsForUser} from '../../../api/beg';

export const PublicProfile = ({navigation}: any) => {
  const user = useSelector((state: RootStateOrAny) => state.currentUser);
  const [data, setData]: any = useState([]);
  const [begs, setBegs]: any = useState([]);
  const [loader, setLoader]: any = useState(false);
  const [records, setrecords]: any = useState('0');
  async function GetData() {
    setLoader(true);
    const res = await getUserInformationById(user.id).finally(() => {
      setLoader(false);
    });
    setData(res);

    const additional = '?sort=-createdAt';
    const b = await getAllBegsForUser(user.id, additional);
    setBegs(b);
    if (b.pagination.records) {
      setrecords(b.pagination.records);
    }
  }
  useEffect(() => {
    GetData();
  }, []);
  function renderBegs({item}: any) {
    return (
      <HomeBeg
        data={item}
        onMorePress={() => navigation.navigate('begDashboard', {beg: item})}
        onPress={() => navigation.navigate('begDashboard', {beg: item})}
      />
    );
  }
  return (
    <View style={[commonStyles.main, {backgroundColor: 'transparent'}]}>
      <View style={{width: '100%'}}>
        <NavigationHeader
          leftComponent={<ArrowBackBlack />}
          rightComponent={
            <MenuIcon
              style={{marginRight: 16}}
              onPress={() => navigation.openDrawer()}
            />
          }
          centerComponent={
            <MyTextMulish style={{fontSize: 20, fontWeight: '700'}}>
              {data.username}
            </MyTextMulish>
          }
        />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loader} onRefresh={GetData} />
        }
        showsVerticalScrollIndicator={false}
        style={{marginTop: 10, width: '100%'}}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <BegerProfileCard user={data} begCount={records} />
          <MyButton
            inverse
            title="Edit Profile"
            onPress={() => navigation.navigate('myProfile')}
            style={{
              height: 36,
              borderRadius: 4,
              backgroundColor: 'transparent',
              borderColor: 'rgba(0, 0, 0, 0.12)'
            }}
          />
          <View style={{marginBottom: 20}} />
        </View>
        <FlatList
          // refreshControl={
          //   <RefreshControl refreshing={loader} onRefresh={GetData} />
          // }
          data={begs.results}
          renderItem={renderBegs}
        />
        {/* <HomeBeg
          data={}
          transparent
          hideUser
          onMorePress={() => navigation.navigate('begDashboard')}
        />
        <HomeBeg data={{}} transparent hideUser /> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {}
});
