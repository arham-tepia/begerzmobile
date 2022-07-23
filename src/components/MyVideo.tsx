import React, {useState} from 'react';
import {ResizeMode, Video} from 'expo-av';
import VideoPlayer from 'expo-video-player';
import {View} from 'react-native';
import {MyTextMulish} from './textMulish';
import {PauseIcon, PlayIcon, ReplayIcon} from './icons/mediaControls';

interface Props {
  item: {
    videoLink: string;
    thumbLink: string;
  };
}

export const MyVideo = (props: Props) => {
  const {item} = props;
  return (
    // <Video
    //   style={{
    //     width: '99%',
    //     height: '100%',
    //     alignSelf: 'center'
    //   }}
    //   resizeMode={ResizeMode.COVER}
    //   source={{
    //     uri: item.videoLink
    //   }}
    //   onError={e => {
    //     console.log(e, 'Error');
    //   }}
    //   rate={1}
    //   useNativeControls
    //   posterSource={{uri: item.thumbLink}}
    //   posterStyle={{
    //     width: '100%',
    //     height: '100%',
    //     backgroundColor: 'black'
    //   }}
    // />
    <VideoPlayer
      videoProps={{
        resizeMode: ResizeMode.COVER,
        source: {
          uri: item.videoLink
        },
        style: {
          width: '99%',
          // height: '100%',
          alignSelf: 'center',
          aspectRatio: 1
        }
      }}
      icon={{
        play: <PlayIcon />,
        pause: <PauseIcon />,
        replay: <ReplayIcon />
      }}
      slider={{visible: false}}
      style={{height: 230, controlsBackgroundColor: 'transparent'}}
    />
  );
};
