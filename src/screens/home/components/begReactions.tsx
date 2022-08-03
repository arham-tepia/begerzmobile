import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {MyTextMulish} from '../../../components/textMulish';
import {ICONS} from '../../../constants/icons';

export const BegReactions = (props: {reactions: any}) => {
  const {reactions} = props;
  const allReactions = [
    {
      name: 'hilarious',
      count: reactions.hilarious,
      icon: ICONS.emojiHilarious,
      id: 1
    },
    {
      name: 'brilliant',
      count: reactions.brilliant,
      icon: ICONS.emojiBrilliant,
      id: 2
    },
    {
      name: 'informative',
      count: reactions.informative,
      icon: ICONS.emojiInformative,
      id: 3
    },
    {
      name: 'inspiring',
      count: reactions.inspiring,
      icon: ICONS.emojiInspiring,
      id: 4
    },
    {
      name: 'admirable',
      count: reactions.admirable,
      icon: ICONS.emojiAdmirable,
      id: 5
    }
  ];

  const sumall = allReactions
    .map(item => item.count)
    .reduce((prev, curr) => prev + curr, 0);

  const MyEmoji = ({item}: any) => {
    return (
      <>
        <Image
          source={item.icon}
          style={[{height: 17, width: 17, marginRight: -5}]}
        />
      </>
    );
  };
  return (
    <View style={styles.main}>
      {allReactions.map((item: any, index: number) => {
        return (
          <View key={index}>{item.count !== 0 && <MyEmoji item={item} />}</View>
        );
      })}
      <MyTextMulish
        style={{
          fontWeight: '700',
          fontSize: 13,
          color: 'black',
          marginLeft: 9
        }}>
        {sumall ?? '0'}
      </MyTextMulish>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    height: 20,
    alignSelf: 'center',
    alignItems: 'center'
    //width: 52
  }
});
