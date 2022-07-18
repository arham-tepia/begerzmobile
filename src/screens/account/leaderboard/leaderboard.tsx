import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {getKarmaPoints} from '../../../api/karma';
import {MyButton} from '../../../components/myButton';
import {commonStyles} from '../../../styles/styles';
import {LeaderBoardCard} from './components/leaderBoardCard';
import {LeaderBoardTopBar} from './components/topbar';

export const LeaderBoard = () => {
  const [selected, setSelected] = useState('1');
  const [karma, setKarma]: any = useState([]);
  const [loader, setLoader]: any = useState(false);

  async function GetData() {
    setLoader(true);
    const res = await getKarmaPoints().finally(() => setLoader(false));
    setKarma(res.results);
    console.log(res, 'karma');
  }

  useEffect(() => {
    GetData();
  }, []);

  function renderKarmaCard({item, index}: any) {
    const diff = findDateDifference(item.updatedAt);

    if (selected === '2') {
      return (
        <>
          {diff <= 30 && <LeaderBoardCard data={item} position={index + 1} />}
        </>
      );
    } else {
      return (
        <>
          <LeaderBoardCard data={item} position={index + 1} />
        </>
      );
    }
  }

  function findDateDifference(karmaDate: any) {
    const today: any = new Date();
    const kDate: any = new Date(karmaDate);
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(2008, 1, 12);
    const secondDate = new Date(2008, 1, 22);

    const diffDays = Math.round(Math.abs((kDate - today) / oneDay));
    return diffDays;
  }

  function renderTop() {
    return (
      <>
        <View
          style={[
            styles.top,
            {width: '90%', alignSelf: 'center', marginBottom: 20}
          ]}>
          <LeaderBoardTopBar
            style={{width: '49.8%'}}
            title="All Time Karma"
            active={selected === '1' && true}
            onPress={() => setSelected('1')}
            left
          />
          <LeaderBoardTopBar
            style={{width: '49.8%'}}
            title="Past 30 Days Karma"
            onPress={() => setSelected('2')}
            active={selected === '2' && true}
            right
          />
        </View>
        {loader && <ActivityIndicator />}
      </>
    );
  }

  return (
    <View style={[commonStyles.main, {backgroundColor: 'transparent'}]}>
      <View
        style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <FlatList
          ListHeaderComponent={renderTop()}
          data={karma}
          renderItem={renderKarmaCard}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
