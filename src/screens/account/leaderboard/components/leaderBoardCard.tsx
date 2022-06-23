import React from 'react';
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';
import {ICONS} from '../../../../constants/icons';
import {MyTextMulish} from '../../../../components/textMulish';
import {GradientBox} from './gradientBox';
import {Avatar} from '../../../../components/avatar';
import {Margin} from '../../../../components/margin';
import {COLORS} from '../../../../constants/colors';
import {KarmaBlueIcon} from '../../../../components/icons/karmaBlue';

interface Props {
  icon?: string;
  name?: string;
  titleStyle?: StyleProp<TextStyle>;
  position?: string;
}

export const LeaderBoardCard = (props: Props) => {
  return (
    <LinearGradient
      colors={['#676DFF', '#ED6C79']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 1.0}}
      style={{
        height: 65,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 12
      }}>
      <TouchableOpacity style={[styles.main, {width: '99%'}]}>
        <GradientBox value={props.position} />
        <Margin right margin={18} />
        <Avatar style={{height: 34, width: 34, borderRadius: 10}} />
        <Margin right margin={8} />
        <MyTextMulish style={styles.name}>{props.name}</MyTextMulish>
        <Margin right margin={20} />
        <KarmaBlueIcon style={{height: 50, width: 50}} />
        <Margin right margin={6} />
        <MyTextMulish style={styles.stat}>12,123</MyTextMulish>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 62,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginVertical: 2
  },
  btn: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000000',
    marginLeft: 10
  },
  name: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000000',
    maxWidth: '25%'
  },
  stat: {
    color: COLORS.primary
  }
});
