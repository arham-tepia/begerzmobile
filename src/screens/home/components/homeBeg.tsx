import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar} from '../../../components/avatar';
import {WhiteEyeIcon} from '../../../components/icons/eyeWhite';
import {MoneyBagHd} from '../../../components/icons/moneybagHd';
import {MoreIcon} from '../../../components/icons/moreIcon';
import {MyTextMulish} from '../../../components/textMulish';
import Video from 'react-native-video';

interface Props {
  data: {
    title?: string;
    videoLink?: string;
    thumbLink?: string;
    goalAmount?: string;
  };
  onPress?(): void;
  transparent?: boolean;
  noGradient?: boolean;
  hideUser?: boolean;
}

export const HomeBeg = (props: Props) => {
  const twidth = Dimensions.get('window').width;
  const width = twidth - 2;
  const {data} = props;

  function OuterLayer({children}: any) {
    if (!props.noGradient) {
      return (
        <LinearGradient
          colors={['#676DFF', '#ED6C79']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{
            height: 281.25,
            width: width,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          {children}
        </LinearGradient>
      );
    } else {
      return (
        <View
          style={{
            height: 281.25,
            width: width,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          {children}
        </View>
      );
    }
  }

  return (
    <View
      style={[
        styles.main,
        props.transparent && {backgroundColor: 'transparent'}
      ]}>
      <TouchableOpacity onPress={props.onPress} style={styles.topRow}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {!props.hideUser && (
            <Avatar customSize size={42} style={{borderRadius: 16}} />
          )}
          <View
            style={{
              marginLeft: 8,
              minHeight: 42,
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              width: '80%'
            }}>
            <MyTextMulish style={styles.title}>
              {data.title ?? 'No title provided'}
            </MyTextMulish>
            {<MyTextMulish style={styles.subtitle}>by user</MyTextMulish>}
          </View>
        </View>
        <View style={{minHeight: 42}}>
          <MoreIcon />
        </View>
      </TouchableOpacity>
      {/* <LinearGradient
        colors={['#676DFF', '#ED6C79']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.0}}
        style={{
          height: 281.25,
          width: width,
          alignItems: 'center',
          justifyContent: 'center'
        }}> */}
      <OuterLayer>
        <View
          style={{
            height: 276.25,
            width: width - 5,
            alignItems: 'center',
            backgroundColor: 'black'
          }}
          // source={data.thumbLink ? {uri: data.thumbLink} : ICONS.noimage}
        >
          <View
            style={{
              position: 'absolute',
              top: 10,
              right: 10
            }}>
            <WhiteEyeIcon />
          </View>
          <Video
            source={{uri: data.videoLink}}
            posterResizeMode={'contain'}
            controls
            poster={data.thumbLink}
            paused
            style={{
              width: '100%',
              height: '100%'
            }}
          />
          <View style={styles.bottom}>
            <View
              style={{
                width: '90%',
                height: 42,
                flexDirection: 'row',
                alignItems: 'center'
              }}>
              <MoneyBagHd />
              <MyTextMulish
                style={{
                  fontWeight: '700',
                  fontSize: 16,
                  color: 'black',
                  marginLeft: 9
                }}>
                ${data.goalAmount}
              </MyTextMulish>
            </View>
          </View>
        </View>
      </OuterLayer>
      {/* </LinearGradient> */}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 21,
    paddingTop: 10
  },
  topRow: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 11
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: '#000000'
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 14,
    color: '#979797'
  },
  bottom: {
    height: 52,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.63)',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
