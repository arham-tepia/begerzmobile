import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';
import {ICONS} from '../../../../constants/icons';
import {MyTextMulish} from '../../../../components/textMulish';

interface Props {
  icon?: string;
  title?: string;
}

export const GradientButton = (props: Props) => {
  return (
    <LinearGradient
      colors={['#676DFF', '#ED6C79']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}
      style={{
        height: 61,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
      }}>
      <TouchableOpacity style={[styles.main, {width: '98%'}]}>
        {props.icon && (
          //@ts-ignore
          <Image source={props.icon} style={{height: 48, width: 48}} />
        )}
        <MyTextMulish style={styles.btn}>{props.title ?? 'Btn'}</MyTextMulish>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 55,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginVertical: 2
  },
  btn: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000000',
    marginLeft: 10
  }
});
