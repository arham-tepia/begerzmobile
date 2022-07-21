import React, {useState} from 'react';
import {Video} from 'expo-av';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleProp,
  View,
  ViewStyle
} from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  posterStyle?: StyleProp<ViewStyle>;
  resizeMode?: any;
  source?: any;
  posterSource?: any;
  onError(e?: any): void;
  rate?: number;
  usePoster?: boolean;
  useNativeControls?: boolean;
}

export const MyVideo = (props: Props) => {
  const {posterSource, posterStyle} = props;
  const [loading, setLoading]: any = useState(true);
  const _onPlaybackStatusUpdate = (playbackStatus: any) => {
    console.log('inPlayback', playbackStatus);

    if (!playbackStatus.isBuffering) {
      console.log('is loaded');

      setLoading(false);
    }
    // else {
    //   if (!loading) {
    //     setLoading(true);
    //   }
    //   console.log('is Buffering');
    // }
  };

  return (
    <View>
      {/* {loading && (
        <ImageBackground
          source={posterSource}
          style={[
            posterStyle,
            {alignItems: 'center', justifyContent: 'center'}
          ]}>
          {loading && <ActivityIndicator color={'white'} />}
        </ImageBackground>
      )}
      {!loading && (
        <Video
          //onLoadStart={() => setLoading(true)}
          //onReadyForDisplay={() => setLoading(false)}
          onReadyForDisplay={_onPlaybackStatusUpdate}
          //usePoster={loading}
          // ref={video}
          {...props}
        />
      )} */}
    </View>
  );
};
