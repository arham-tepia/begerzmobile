import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomCard} from './bottomCard';
import {Margin} from './margin';
import {MyTextInput} from './myTextinput';
import {MyTextPoppins} from './textPoppins';

interface Props {
  title?: string;
}

export const Report = (props: Props) => {
  return (
    <BottomCard
      contentContainerStyles={{
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      topViewStyle={{height: '60%'}}
      visible>
      <View style={styles.main}>
        <MyTextPoppins style={styles.title}>Report</MyTextPoppins>
        <Margin top margin={15} />
        <MyTextInput label="Reason" />
      </View>
    </BottomCard>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '90%',
    width: '90%',
    alignSelf: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: '600'
  }
});
