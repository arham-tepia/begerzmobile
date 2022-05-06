import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {COLORS} from '../../constants/colors';
import {ICONS} from '../../constants/icons';
import {wait} from '../../helpers/wait';
import {commonStyles} from '../../styles/styles';

export const Splash = ({navigation}: any) => {
  useEffect(() => {
    wait(3000).then(() => {
      navigation.navigate('signin');
    });
  }, []);
  return (
    <View
      style={[
        commonStyles.main,
        {justifyContent: 'center', backgroundColor: COLORS.primary},
      ]}>
      <Image source={ICONS.logoWhite} style={{width: 254.9, height: 78.95}} />
    </View>
  );
};
