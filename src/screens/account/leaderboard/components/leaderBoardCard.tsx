import React from 'react';
import {StyleProp, StyleSheet, TextStyle, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {MyTextMulish} from '../../../../components/textMulish';
import {GradientBox} from './gradientBox';
import {Avatar} from '../../../../components/avatar';
import {Margin} from '../../../../components/margin';
import {COLORS} from '../../../../constants/colors';
import {
  KarmaBlueIcon,
  KarmaGreenIcon,
  KarmaGreyIcon,
  KarmaPurple,
  KarmaYellowIcon
} from '../../../../components/icons/karmaBlue';

interface Props {
  icon?: string;
  name?: string;
  titleStyle?: StyleProp<TextStyle>;
  position?: number;
  data?: any;
}

export const LeaderBoardCard = (props: Props) => {
  const {position} = props;
  function calculatePositionIcon() {
    const s = {height: 50, width: 50};
    if (position === 1) {
      return <KarmaGreenIcon style={s} />;
    }
    if (position === 2) {
      return <KarmaGreyIcon style={s} />;
    }
    if (position === 3) {
      return <KarmaYellowIcon style={s} />;
    }

    return <KarmaPurple style={s} />;
  }
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
        <GradientBox value={props.position?.toString()} />
        <Margin right margin={18} />
        <Avatar
          style={{height: 34, width: 34, borderRadius: 10}}
          source={props.data.profileImage && {uri: props.data.profileImage}}
        />
        <Margin right margin={8} />
        <MyTextMulish style={styles.name}>{props.data.username}</MyTextMulish>
        <Margin right margin={20} />
        {/* <KarmaYellowIcon style={{height: 50, width: 50}} /> */}
        {calculatePositionIcon()}
        <Margin right margin={6} />
        <MyTextMulish style={styles.stat}>
          {props.data.karma ?? '0'}
        </MyTextMulish>
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
    width: '26%'
  },
  stat: {
    color: COLORS.primary
  }
});
