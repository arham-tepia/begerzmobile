import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {MyTextMulish} from '../../../../components/textMulish';

interface Props {
  active?: boolean;
  title?: string;
  style?: StyleProp<ViewStyle>;
  onPress?(): void;
  left?: boolean;
  right?: boolean;
}

const ActiveBar = () => {
  return (
    <LinearGradient
      colors={['#676DFF', '#ED6C79']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}
      style={{
        height: 3,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        alignSelf: 'center',
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150
      }}
    />
  );
};

export const LeaderBoardTopBar = (props: Props) => {
  return (
    <View
      style={[{width: '100%'}, props.style, !props.active && {marginTop: 3}]}>
      {props.active && <ActiveBar />}
      <TouchableOpacity
        onPress={props.onPress}
        style={[
          styles.main,
          props.left && styles.left,
          props.right && styles.right
        ]}>
        <MyTextMulish
          style={[styles.title, props.active && {fontWeight: '700'}]}>
          {props.title}
        </MyTextMulish>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 64,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontWeight: '400',
    fontSize: 14,
    color: '#000000'
  },
  left: {
    borderBottomLeftRadius: 13
  },
  right: {
    borderBottomRightRadius: 13
  }
});
