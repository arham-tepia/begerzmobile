import React, {useState} from 'react';
import {ResizeMode, Video} from 'expo-av';
interface Props {
  item: {
    videoLink: string;
    thumbLink: string;
  };
}

export const MyVideo = (props: Props) => {
  const {item} = props;
  return (
    <Video
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
    />
  );
};
