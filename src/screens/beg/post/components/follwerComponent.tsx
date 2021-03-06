import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from '../../../../components/avatar';
import {Radio} from '../../../../components/radio';
import {MyTextPoppins} from '../../../../components/textPoppins';
import {COLORS} from '../../../../constants/colors';

interface Props {
  name?: string;
  source?: any;
  active?: boolean;
  onPress?(): void;
  data?: any;
}

export const FollowerComponent = (props: Props) => {
  return (
    <View style={styles.main}>
      <Radio
        onPress={props.onPress}
        innerStyle={{backgroundColor: COLORS.primary}}
        mainStyle={{
          borderColor: COLORS.primary,
          height: 20,
          width: 20,
          borderRadius: 16,
          marginRight: 15
        }}
        active={props.active}
      />
      <Avatar
        source={props.source && {uri: props.source}}
        customSize
        size={32}
      />
      <MyTextPoppins style={styles.name}>
        {props.data.user.email ?? ''}
      </MyTextPoppins>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginVertical: 5
  },
  name: {
    color: COLORS.primary,
    lineHeight: 20,
    marginLeft: 10
  }
});
