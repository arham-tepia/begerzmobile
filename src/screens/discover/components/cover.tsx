import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ICONS} from '../../../constants/icons';

export const DiscoverCover = () => {
  const [loader, setLoaded] = useState(false);
  async function onLoad(uri: any) {
    console.log(uri, 'uri');
  }
  const uri = 'https://source.unsplash.com/random';
  return (
    <View style={styles.main}>
      <Image
        source={!loader ? ICONS.noimage : {uri: uri}}
        style={styles.img}
        onLoadEnd={() => setLoaded(true)}
        onLoadStart={() => setLoaded(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 178
  },
  img: {
    width: '100%',
    height: 178,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }
});
