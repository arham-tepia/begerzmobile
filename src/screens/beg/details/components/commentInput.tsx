import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Avatar} from '../../../../components/avatar';
import {MyTextMulish} from '../../../../components/textMulish';
import {COLORS} from '../../../../constants/colors';
import {FONTS} from '../../../../constants/fonts';

export const CommentInput = () => {
  return (
    <View style={styles.main}>
      <Avatar style={{borderRadius: 16, marginLeft: 21}} customSize size={42} />
      <TextInput
        multiline
        style={styles.ti}
        placeholder={'Comment as user'}
        placeholderTextColor="#B0B0B0"
      />
      <MyTextMulish onPress={() => {}} style={styles.post}>
        POST
      </MyTextMulish>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    minHeight: 71,
    alignItems: 'center',
    borderColor: '#dedede',
    borderTopWidth: 0.5,
    width: '100%',
    flexDirection: 'row'
  },
  post: {
    color: 'background: rgba(29, 186, 209, 0.5)',
    fontWeight: '700',
    fontSize: 13,
    letterSpacing: 0.5
  },
  ti: {
    marginLeft: 9,
    width: '60%',
    padding: 10,
    marginRight: 10,
    fontFamily: FONTS.M_REGULAR,
    fontSize: 13,
    color: '#000000'
  }
});
