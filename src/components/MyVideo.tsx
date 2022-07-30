import React from 'react';
import {ResizeMode} from 'expo-av';
import VideoPlayer from 'expo-video-player';
import {PauseIcon, PlayIcon, ReplayIcon} from './icons/mediaControls';

interface Props {
  item: {
    videoLink: string;
    thumbLink: string;
  };
  onPress?(): void;
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
      slider={{
        visible: true
      }}
      style={{height: 230, controlsBackgroundColor: 'transparent'}}
    />
  );
};
