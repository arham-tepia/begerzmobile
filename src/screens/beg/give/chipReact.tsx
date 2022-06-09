import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {Avatar} from '../../../components/avatar';
import {StarColored} from '../../../components/icons/starColored';
import {MyButton} from '../../../components/myButton';
import {MyTextMontserrat} from '../../../components/textMontserrat';
import {MyTextMulish} from '../../../components/textMulish';
import {MyTextPoppins} from '../../../components/textPoppins';
import {COLORS} from '../../../constants/colors';
import {FONTS} from '../../../constants/fonts';
import {ICONS} from '../../../constants/icons';
import {commonStyles} from '../../../styles/styles';
import {BegHeadings} from '../post/components/begHeadings';

export const ChipReact = () => {
  const reactions = [
    {
      icon: ICONS.emojiInspiring,
      name: 'Inspiring'
    },
    {
      icon: ICONS.emojiInformative,
      name: 'Informative'
    },
    {
      icon: ICONS.emojiHilarious,
      name: 'Funny'
    },
    {
      icon: ICONS.emojiBrilliant,
      name: 'Brilliant'
    },
    {
      icon: ICONS.emojiAdmirable,
      name: 'Admirable'
    }
  ];
  return (
    <View style={commonStyles.main}>
      <View style={{marginTop: 20}} />
      <BegHeadings style={{fontFamily: FONTS.P_SEMIBOLD, color: '#000000'}}>
        React to this beg
      </BegHeadings>
      <View style={{width: '90%'}}>
        <View style={styles.emojiRow}>
          {reactions.map((item: any) => {
            return (
              <TouchableOpacity style={[styles.emojiView, item.customStyle]}>
                <Image source={item.icon} style={styles.emojiStyle} />
                <MyTextMulish style={styles.emojiText}>
                  {item.name}
                </MyTextMulish>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.userView}>
          <Avatar customSize size={48} />
          <View style={{marginLeft: 14}}>
            <MyTextMontserrat style={styles.subtitle}>
              You are reacting as:
            </MyTextMontserrat>
            <MyTextMontserrat style={styles.name}>Bob johnson</MyTextMontserrat>
          </View>
        </View>
        <View style={[styles.userView, {marginTop: 40}]}>
          <StarColored />
          <View style={{marginLeft: 7}}>
            <MyTextMontserrat style={{fontWeight: '500', fontSize: 16}}>
              Thanks for chipping in!
            </MyTextMontserrat>
            <MyTextMontserrat style={{fontWeight: '600', fontSize: 16}}>
              +2 KarmaPoints!
            </MyTextMontserrat>
          </View>
        </View>
        <View style={{marginTop: 41}} />

        <MyButton
          title="CONTINUE"
          textStyles={{
            fontFamily: FONTS.P_REGULAR,
            fontWeight: '600',
            letterSpacing: 0
          }}
          style={{height: 48, borderRadius: 24}}
        />
        <MyTextPoppins onPress={() => {}} style={styles.skipText}>
          Skip, View Beg Dashboard
        </MyTextPoppins>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emojiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginTop: 10,
    borderColor: '#28383e'
  },
  emojiText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111111',
    marginTop: 9
  },
  emojiView: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 102
  },
  emojiStyle: {
    height: 34,
    width: 34,
    borderRadius: 34
  },
  userView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 16,
    color: '#3b3e44'
  },
  name: {
    fontWeight: '700',
    fontSize: 20,
    color: 'black',
    marginTop: 3
  },
  skipText: {
    color: COLORS.primary,
    fontSize: 12,
    textAlign: 'center',
    textDecorationColor: COLORS.primary,
    textDecorationLine: 'underline',
    marginTop: 16
  }
});
