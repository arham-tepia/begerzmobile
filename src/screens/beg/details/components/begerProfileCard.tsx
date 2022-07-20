import React, {useReducer} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ProfileAvatar} from '../../../../components/profileAvatar';
import {MyTextMulish} from '../../../../components/textMulish';

interface Props {
  user?: any;
  begCount?: any;
}

export const BegerProfileCard = (props: Props) => {
  const {user} = props;
  const data = [
    {name: 'Begz', value: props.begCount ?? 0, borderRight: true},
    {
      name: 'Raised',
      value: '$' + user.totalRaised ?? 0,
      borderRight: true
    },
    {
      name: 'Chip-Ins',
      value: '$' + user.totalChippedIn ?? 0,
      borderRight: true
    },
    {
      name: 'Donated',
      value: '$' + user.totalDonated ?? 0,
      borderRight: false
    }
  ];

  function renderBottomStats({item}: any) {
    return (
      <View
        style={[styles.bottomElement, item.borderRight && styles.rightBorder]}>
        <MyTextMulish style={styles.statSmall}>{item.value}</MyTextMulish>
        <MyTextMulish style={styles.titleSmall}>{item.name}</MyTextMulish>
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <View style={styles.topRow}>
        <View style={styles.topRCol}>
          <MyTextMulish style={styles.statBold}>{user.followers}</MyTextMulish>
          <MyTextMulish style={styles.titleBig}>Followers</MyTextMulish>
        </View>
        <ProfileAvatar
          source={props.user.profileImage && {uri: user.profileImage}}
        />
        <View style={styles.topRCol}>
          <MyTextMulish style={styles.statBold}>{user.following}</MyTextMulish>
          <MyTextMulish style={styles.titleBig}>Following</MyTextMulish>
        </View>
      </View>
      <View style={{marginTop: 28}} />
      <MyTextMulish style={styles.statSmall}>{user.karma}</MyTextMulish>
      <MyTextMulish style={styles.titleBig}>Karma earned</MyTextMulish>
      <View style={{width: '100%', marginTop: 18}}>
        <FlatList
          data={data}
          numColumns={4}
          //style={{width: '100%'}}
          renderItem={renderBottomStats}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    minHeight: 275,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 10
  },
  statBold: {
    fontWeight: '700',
    fontSize: 20,
    color: 'black'
  },
  titleBig: {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 13,
    fontWeight: '600'
  },
  statSmall: {
    fontWeight: '700',
    color: '#000000',
    fontSize: 14
  },
  titleSmall: {
    color: 'rgba(0, 0, 0, 0.38)',
    fontSize: 11,
    fontWeight: '700'
  },
  topRow: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%'
  },
  topRCol: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomElement: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    borderTopWidth: 0.5,
    borderColor: 'rgba(222, 222, 222, 1)'
  },
  rightBorder: {
    borderRightWidth: 0.5,
    borderColor: 'rgba(222, 222, 222, 1)'
  }
});
