import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Avatar} from '../../../../components/avatar';
import {HeartIcon} from '../../../../components/icons/heart';
import {MyTextMulish} from '../../../../components/textMulish';

interface Props {
  comment?: string;
  noLike?: boolean;
  name?: string;
}

export const Comment = (props: Props) => {
  var cmnt =
    'So many people showed up to watch me perform this weekend. I am so grateful for your support!';
  return (
    <View style={[styles.main, !props.noLike && {borderBottomWidth: 0}]}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginTop: 23
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 16,
            alignItems: 'flex-start',
            width: '75%'
          }}>
          <Avatar
            style={{borderRadius: 16, marginRight: 16}}
            customSize
            size={42}
          />
          <MyTextMulish style={[styles.name, {width: '90%'}]}>
            {props.name ?? 'Jane Doe'}{' '}
            <MyTextMulish style={[styles.comment]}>
              {props.comment ?? cmnt}
            </MyTextMulish>
          </MyTextMulish>
        </View>
        {!props.noLike && <HeartIcon style={{marginRight: 19}} />}
      </View>
      <View
        style={{
          marginLeft: 74,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10
        }}>
        <MyTextMulish
          style={[styles.comment, {color: 'grey', marginRight: 15}]}>
          3h
        </MyTextMulish>
        <MyTextMulish
          style={[styles.comment, {color: 'grey', marginRight: 15}]}>
          1 like
        </MyTextMulish>
        <MyTextMulish
          onPress={() => {}}
          style={[styles.comment, {color: 'grey'}]}>
          Reply
        </MyTextMulish>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    minHeight: 113,
    borderBottomWidth: 0.5,
    borderColor: '#ededed'
  },
  name: {
    fontWeight: '700',
    fontSize: 13,
    color: '#000000',
    letterSpacing: 0.5
  },
  comment: {
    fontWeight: '400',
    fontSize: 12,
    color: '#000000',
    letterSpacing: 0.5
  }
});
