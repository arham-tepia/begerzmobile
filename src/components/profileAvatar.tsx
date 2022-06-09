import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle
} from 'react-native';
import {ICONS} from '../constants/icons';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  source?: any;
  onPress?(): void;
  pressable?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const ProfileAvatar = (props: Props) => {
  const {source, onPress, pressable} = props;
  return (
    <LinearGradient
      colors={['#676DFF', '#ED6C79']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}
      style={{
        height: 110,
        width: 110,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
      }}>
      <TouchableOpacity
        onPress={onPress}
        disabled={!pressable}
        style={[styles.main, styles.ratio, props.style]}>
        {props.source !== undefined ? (
          <Image style={[styles.ratio]} source={source ?? ICONS.user} />
        ) : (
          <Image style={[styles.ratio]} source={ICONS.user} />
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  ratio: {
    height: 104,
    width: 104,
    borderRadius: 18,
    backgroundColor: 'white'
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
});
