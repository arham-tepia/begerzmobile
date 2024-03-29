import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar} from '../../../components/avatar';
import {WhiteEyeIcon} from '../../../components/icons/eyeWhite';
import {MoneyBagHd} from '../../../components/icons/moneybagHd';
import {MoreIcon} from '../../../components/icons/moreIcon';
import {MyTextMulish} from '../../../components/textMulish';
import Carousel from 'react-native-snap-carousel';
import {ResizeMode, Video} from 'expo-av';
import {BegReactions} from './begReactions';
import {VideoCam} from '../../../components/icons/videoCam';
import {Pagination} from '../../../components/pagination';

interface Props {
  data: {
    title?: string;
    goalAmount?: string;
    author?: {
      username?: string;
      profileImage?: string;
    };
    _id?: string;
    videos: [
      {
        _id: string;
        createdAt: string;
        primary: boolean;
        thumbLink: string;
        videoLink: string;
        videoType: string;
      }
    ];
    achievements?: any;
    views?: string;
  };
  onPress?(): void;
  transparent?: boolean;
  noGradient?: boolean;
  hideUser?: boolean;
  onMorePress?(): void;
}

export const HomeBeg = (props: Props) => {
  const twidth = Dimensions.get('window').width;
  const width = twidth - 2;
  const {data} = props;
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    return () => {};
  }, []);

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
  const video = React.useRef(null);

  function renderVideos({item}: any) {
    return (
      <>
        <Video
          ref={video}
          style={{
            width: width - 4,
            height: '100%',
            alignSelf: 'center'
          }}
          resizeMode={ResizeMode.COVER}
          source={{
            uri: item.videoLink
          }}
          onError={e => {
            console.log(e, 'Error');
          }}
          useNativeControls
          posterSource={{uri: item.thumbLink}}
          posterStyle={{
            width: width - 4,
            height: '100%',
            backgroundColor: 'black'
          }}
        />
      </>
    );
  }

  function pagination() {
    return (
      <Pagination
        style={{position: 'absolute', bottom: 70}}
        activeIndex={activeSlide}
        data={data.videos}
      />
    );
  }

  return (
    <View
      key={data._id}
      style={[
        styles.main,
        props.transparent && {backgroundColor: 'transparent'}
      ]}>
      <TouchableOpacity onPress={props.onPress} style={styles.topRow}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {!props.hideUser && (
            <Avatar
              customSize
              size={42}
              style={{borderRadius: 16}}
              source={
                data.author?.profileImage && {uri: data.author.profileImage}
              }
            />
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
            {
              <MyTextMulish style={styles.subtitle}>
                by {data.author?.username}
              </MyTextMulish>
            }
          </View>
        </View>
        <View style={{minHeight: 42}}>
          <MoreIcon onPress={props.onMorePress} />
        </View>
      </TouchableOpacity>

      <OuterLayer>
        <View
          style={{
            height: '99%',
            width: width - 5,
            alignItems: 'center',
            backgroundColor: 'black'
          }}>
          <View
            style={{
              position: 'absolute',
              top: 10,
              right: 10
            }}>
            <WhiteEyeIcon />
          </View>

          <Carousel
            data={data.videos}
            style={{alignItems: 'center', justifyContent: 'center'}}
            renderItem={renderVideos}
            sliderWidth={width}
            itemWidth={width}
            onSnapToItem={index => setActiveSlide(index)}
          />
          {pagination()}

          <View style={styles.bottom}>
            <View
              style={{
                //width: '90%',
                height: 42,
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 10,
                justifyContent: 'center'
              }}>
              <BegReactions reactions={data.achievements} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 15
                }}>
                <VideoCam />
                <MyTextMulish
                  style={{
                    fontWeight: '700',
                    fontSize: 13,
                    color: 'black',
                    marginLeft: 9
                  }}>
                  {data.views ?? '0'}
                </MyTextMulish>
              </View>
            </View>
          </View>
        </View>
      </OuterLayer>
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
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});
