import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {getChipinsMadeToABeg} from '../../../api/beg';
import {Margin} from '../../../components/margin';
import {DonatorCard} from './components/donatorCard';

export const Donators = ({route}: any) => {
  const beg = route.params.beg;
  const [donations, setDonations]: any = useState([]);
  const [loader, setLoader]: any = useState(false);
  async function GetData() {
    setLoader(true);
    const res = await getChipinsMadeToABeg(beg._id).finally(() =>
      setLoader(false)
    );
    console.log(res, 'Chipins');
    setDonations(res.results);
  }
  useEffect(() => {
    GetData();
  }, []);
  function renderDonator({item}: any) {
    return <DonatorCard data={item} />;
  }
  return (
    <View style={styles.main}>
      <Margin top margin={21} />
      <View style={{width: '90%'}}>
        <FlatList data={donations} renderItem={renderDonator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center'
  }
});
