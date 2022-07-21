import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import {RootStateOrAny, useSelector} from 'react-redux';
import {postReaction} from '../../../api/reactions';
import {getUserInformationById, getUserReactionToABeg} from '../../../api/user';
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

export const ChipReact = ({route, navigation}: any) => {
  const [user, setUser]: any = useState([]);
  const [userReactions, setUserReactions]: any = useState([]);
  const [loader, setLoader]: any = useState(false);
  const state = useSelector((state: RootStateOrAny) => state.currentUser);
  const beg = route.params.beg;

  async function GetData() {
    const u = await getUserInformationById(state.id);
    setUser(u);
    getUserReactions();
  }

  async function getUserReactions() {
    setLoader(true);
    const res = await getUserReactionToABeg(state.id, beg._id).finally(() =>
      setLoader(false)
    );
    if (res.results) {
      if (res.results[0]._id) {
        setUserReactions(res.results[0]);
      }
    }
  }

  async function onReactionPress(reaction: string) {
    const lcaps = reaction.toLowerCase();
    console.log(lcaps);
    const d = {
      begId: beg._id,
      userId: state.id,
      reactionType: lcaps
    };
    const res = await postReaction(d).finally(() => {});
    if (res._id) {
      getUserReactions();
    }
  }

  useEffect(() => {
    GetData();
  }, []);

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
        React to this beg {loader && <ActivityIndicator />}
      </BegHeadings>
      <View style={{width: '90%'}}>
        <View style={styles.emojiRow}>
          {reactions.map((item: any) => {
            return (
              <TouchableOpacity
                onPress={() => onReactionPress(item.name)}
                style={[
                  styles.emojiView,
                  item.customStyle,
                  userReactions.reactionType === item.name.toLowerCase() && {
                    backgroundColor: COLORS.lightPink
                  }
                ]}>
                <Image source={item.icon} style={styles.emojiStyle} />
                <MyTextMulish style={styles.emojiText}>
                  {item.name}
                </MyTextMulish>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.userView}>
          <Avatar
            customSize
            size={48}
            source={user?.profileImage && {uri: user.profileImage}}
          />
          <View style={{marginLeft: 14}}>
            <MyTextMontserrat style={styles.subtitle}>
              You are reacting as:
            </MyTextMontserrat>
            <MyTextMontserrat style={styles.name}>
              {user?.firstName} {user?.lastName}
            </MyTextMontserrat>
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
          //onPress={() => console.log('bn-home')}
          onPress={() => navigation.navigate('home')}
          style={{height: 48, borderRadius: 24}}
        />
        <MyTextPoppins
          onPress={() => navigation.navigate('bn-accounts')}
          style={styles.skipText}>
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
    borderColor: '#28383e',
    paddingBottom: 5
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
