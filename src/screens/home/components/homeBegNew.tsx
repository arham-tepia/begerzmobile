import React, {useEffect, useState} from 'react';
import {Dimensions, Pressable, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar} from '../../../components/avatar';
import {MoneyBagHd} from '../../../components/icons/moneybagHd';
import {MoreIcon} from '../../../components/icons/moreIcon';
import {VideoCam} from '../../../components/icons/videoCam';
import {Margin} from '../../../components/margin';
import {MyTextMulish} from '../../../components/textMulish';
import {ICONS} from '../../../constants/icons';
import {BegReactions} from './begReactions';
import Carousel from 'react-native-snap-carousel';
import {MyVideo} from '../../../components/MyVideo';
import {Pagination} from '../../../components/pagination';

interface Props {
  data: {
    title?: string;
    goalAmount?: string;
    amountRaised?: string;
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
  index?: number;
}

export const HomeBegNew = React.memo((props: Props) => {
  const {data} = props;
  const [activeSlide, setActiveSlide]: any = useState(0);
  useEffect(() => {
    return () => {};
  }, [props.index]);

  function OuterLayer({children}: any) {
    if (!props.noGradient) {
      return (
        <LinearGradient
          colors={['#676DFF', '#ED6C79']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{
            height: 281.25,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <View
            style={{
              height: 277,
              width: '99%',
              backgroundColor: 'black',
              alignItems: 'center'
            }}>
            {children}
          </View>
        </LinearGradient>
      );
    } else {
      return (
        <View
          style={{
            height: 281.25,
            //width: width,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          {children}
        </View>
      );
    }
  }
  const twidth = Dimensions.get('window').width;
  const width = twidth - 2;
  function renderVideos({item}: any) {
    return (
      <>
        <MyVideo item={item} />
        {/* <Video
          style={{
            width: '99%',
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
          rate={1}
          useNativeControls
          posterSource={{uri: item.thumbLink}}
          posterStyle={{
            width: '100%',
            height: '100%',
            backgroundColor: 'black'
          }}
        /> */}
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
    <Pressable onPress={props.onPress} key={props.index} style={styles.main}>
      <View style={styles.topbar}>
        <View style={styles.topBarCol1}>
          {!props.hideUser && (
            <>
              <Avatar
                customSize
                size={42}
                style={{borderRadius: 16}}
                source={
                  data.author?.profileImage
                    ? {uri: data.author.profileImage}
                    : ICONS.user
                }
              />
              <Margin right margin={8} />
              <View style={styles.titleRow}>
                <MyTextMulish numberOfLines={1} style={styles.title}>
                  {data.title}
                </MyTextMulish>
                <MyTextMulish
                  numberOfLines={1}
                  style={[styles.subtitle, {marginTop: 1}]}>
                  by {data.author?.username}
                </MyTextMulish>
              </View>
            </>
          )}
        </View>
        <View style={styles.topBarCol2}>
          <MoreIcon />
        </View>
      </View>
      <OuterLayer>
        <Carousel
          data={data.videos}
          style={{alignItems: 'center', justifyContent: 'center'}}
          renderItem={renderVideos}
          sliderWidth={width}
          itemWidth={width}
          layout="stack"
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
              {data.amountRaised ? '$' + data.amountRaised + ' of ' : ''}$
              {data.goalAmount}
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
      </OuterLayer>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  main: {
    height: 333,
    width: '100%',
    marginBottom: 24,
    alignItems: 'center',
    marginTop: 16
  },
  topbar: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 52
  },
  topBarCol1: {
    width: '80%',
    alignItems: 'flex-start',
    height: '100%',
    flexDirection: 'row'
  },
  titleRow: {
    height: '100%',
    width: '80%'
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
  topBarCol2: {
    width: '20%',
    height: 52,
    alignItems: 'flex-end'
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
