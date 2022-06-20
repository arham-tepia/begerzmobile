import React from 'react';
import {View} from 'react-native';
import {BottomCard} from '../../../../components/bottomCard';
import {MyTextMulish} from '../../../../components/textMulish';

export const Dropdown = () => {
  return (
    <BottomCard
      contentContainerStyles={{height: '45%'}}
      topViewStyle={{height: '55%'}}
      visible={false}>
      <View style={{width: '90%', alignSelf: 'center', marginTop: 30}}>
        <MyTextMulish style={{fontWeight: '700', fontSize: 20}}>
          Select charity to donate to:
        </MyTextMulish>
      </View>
    </BottomCard>
  );
};
