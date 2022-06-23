import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {MyTextMulish} from '../../../../components/textMulish';

interface Props {
  grey?: boolean;
  value?: string;
}

export const GradientBox = (props: Props) => {
  const {grey} = props;
  const greyGradient = ['rgba(243, 243, 243, 0.6)', 'rgba(94, 94, 94, 0.6)'];
  const purpleGradient = ['#676DFF', '#ED6C79'];
  const colors = grey ? greyGradient : purpleGradient;
  return (
    <LinearGradient
      colors={colors}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}
      style={{
        height: 54,
        width: 54,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center'
      }}>
      <MyTextMulish style={{fontWeight: '800', fontSize: 22, color: 'white'}}>
        {props.value}
      </MyTextMulish>
    </LinearGradient>
  );
};
