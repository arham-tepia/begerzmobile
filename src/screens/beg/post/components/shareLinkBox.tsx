import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {MyTextMontserrat} from '../../../../components/textMontserrat';
import {MyTextPoppins} from '../../../../components/textPoppins';
import {COLORS} from '../../../../constants/colors';
import {FONTS} from '../../../../constants/fonts';

interface Props {
  link?: string;
  onCopyPress?(): void;
}

export const ShareLinkBox = (props: Props) => {
  return (
    <View style={styles.main}>
      <View style={styles.textView}>
        <MyTextMontserrat numberOfLines={1} style={styles.text}>
          {props.link ?? 'begerz.com/08989'}
        </MyTextMontserrat>
      </View>
      <TouchableOpacity onPress={props.onCopyPress} style={styles.button}>
        <MyTextPoppins
          style={{
            fontFamily: FONTS.P_SEMIBOLD,
            fontSize: 14,
            color: COLORS.primary
          }}>
          Copy
        </MyTextPoppins>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  text: {
    width: '90%',
    textAlign: 'left',
    alignSelf: 'center',
    color: '#7b7b7b'
  },
  button: {
    borderWidth: 1,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.primary,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 0
  },
  textView: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    width: '70%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderTopColor: '#28383e',
    borderBottomColor: '#28383e',
    borderLeftColor: '#28383e'
  }
});
