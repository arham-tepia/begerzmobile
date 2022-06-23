import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {commonStyles} from '../../../styles/styles';
import {LeaderBoardCard} from './components/leaderBoardCard';
import {LeaderBoardTopBar} from './components/topbar';

export const LeaderBoard = () => {
  const [selected, setSelected] = useState('1');
  return (
    <View style={[commonStyles.main, {backgroundColor: 'transparent'}]}>
      <View style={styles.top}>
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
      <View style={{width: '90%', marginTop: 20}}>
        <LeaderBoardCard name="Rebecca" position="1st" />
        <LeaderBoardCard name="Rebecca" position="1st" />
        <LeaderBoardCard name="Rebecca" position="1st" />
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
