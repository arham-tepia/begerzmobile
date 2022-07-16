import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {MoneyBagFull} from '../../../components/icons/moneyBagFull';
import {MyTextMulish} from '../../../components/textMulish';
import {ICONS} from '../../../constants/icons';

interface Props {
  source?: string;
  onPress?(): void;
  amount?: any;
  data?: any;
  navigation: any;
}

export const Story = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('home-begDetailsStack', {beg: props.data})
      }
      style={{alignSelf: 'center'}}>
      <LinearGradient
        colors={['#676DFF', '#ED6C79']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.0}}
        style={{
          height: 72,
          width: 83,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 16,
          alignSelf: 'center',
          marginLeft: 16
        }}>
        {/* <TouchableOpacity style={styles.main}>
        <View style={styles.bottom}></View>
      </TouchableOpacity> */}
        <ImageBackground
          style={styles.main}
          borderRadius={16}
          //defaultSource={ICONS.noimage}
          source={
            props.data?.videos[0]?.thumbLink
              ? {uri: props.data?.videos[0]?.thumbLink}
              : ICONS.noimage
          }>
          <View style={styles.bottom}>
            <View
              style={{
                alignItems: 'center',
                //   justifyContent: 'center',
                flexDirection: 'row',
                width: '70%',
                alignSelf: 'center'
              }}>
              <MoneyBagFull />
              <MyTextMulish
                style={{
                  fontWeight: '500',
                  fontSize: 9,
                  color: 'black',
                  marginLeft: 5,
                  textAlign: 'center'
                }}>
                ${props.data.goalAmount ?? '500'}
              </MyTextMulish>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 70,
    width: 81,
    borderRadius: 16,
    //  backgroundColor: 'white',
    alignItems: 'center'
  },
  bottom: {
    height: 12.58,
    width: 79,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.63)',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16

    // backgroundColor: 'red'
    // borderWidth: 1
  }
});
