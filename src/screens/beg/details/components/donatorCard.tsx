import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from '../../../../components/avatar';
import {Margin} from '../../../../components/margin';
import {MyTextMulish} from '../../../../components/textMulish';
import {COLORS} from '../../../../constants/colors';

interface Props {
  data?: any;
}

export const DonatorCard = (props: Props) => {
  console.log(props.data);

  return (
    <View style={styles.main}>
      <Margin left margin={13} />
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          width: '65%'
        }}>
        <Avatar />
        <Margin left margin={11} />

        <View style={styles.nameCol}>
          <MyTextMulish numberOfLines={1} style={styles.name}>
            {props.data.donor.username}
          </MyTextMulish>
          <Margin bottom margin={5} />

          {/* <MyTextMulish style={styles.time}>15 min</MyTextMulish> */}
        </View>
      </View>
      <View style={styles.amountCol}>
        <MyTextMulish style={styles.donate}>Donate</MyTextMulish>
        <MyTextMulish numberOfLines={1} style={[styles.amount]}>
          ${props.data.amount ?? '0'}
        </MyTextMulish>
      </View>
      <Margin right margin={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 72,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.09)',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 1.0,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontWeight: '700',
    fontSize: 18,
    color: '#000000'
  },
  time: {
    fontSize: 10,
    color: '#000000'
  },
  amount: {
    fontWeight: '800',
    fontSize: 25,
    color: COLORS.primary
  },
  donate: {
    fontWeight: '800',
    color: '#000000',
    fontSize: 10
  },
  amountCol: {
    width: '30%',
    alignItems: 'center'
  },
  nameCol: {
    width: '70%'
  }
});
