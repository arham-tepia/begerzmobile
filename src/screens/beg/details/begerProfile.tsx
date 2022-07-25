import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {RootStateOrAny, useSelector} from 'react-redux';
import {
  followUser,
  isFollowingABegger,
  unfollowUser
} from '../../../api/followers';
import {getUserInformationById} from '../../../api/user';
import {ArrowBackBlack} from '../../../components/icons/arowBackBlack';
import {MoreIcon} from '../../../components/icons/moreIcon';
import {MyButton} from '../../../components/myButton';
import {NavigationHeader} from '../../../components/navigationHeader';
import {MyTextMulish} from '../../../components/textMulish';
import {commonStyles} from '../../../styles/styles';
import {HomeBeg} from '../../home/components/homeBeg';
import {BegerProfileCard} from './components/begerProfileCard';

export const BegerProfile = ({route}: any) => {
  const [user, setUser]: any = useState([]);
  const [loading, setLoading]: any = useState(false);
  const [follow, setFollow]: any = useState([]);
  const iam = useSelector((state: RootStateOrAny) => state.currentUser);
  useEffect(() => {
    getData();
    getFollow();
  }, []);

  async function getFollow() {
    const res = await isFollowingABegger({
      begerId: route.params.user._id,
      userId: iam.id
    });
    if (res.pagination.records !== 0) {
      setFollow(res.results[0]);
    }
  }

  async function getData() {
    const res = await getUserInformationById(route.params.user._id);
    setUser(res);
    return;
  }
  const thisUser = useSelector((state: RootStateOrAny) => state.currentUser);
  async function onFollowPress() {
    setLoading(true);
    const data = {
      userId: user._id,
      followerId: thisUser.id
    };

    if (follow._id) {
      const res = await unfollowUser({id: follow._id}).finally(() =>
        setLoading(false)
      );
      setFollow([]);
    } else {
      const res = await followUser(data).finally(() => setLoading(false));
    }

    getData();
    getFollow();
  }
  return (
    <View style={[commonStyles.main, {backgroundColor: 'transparent'}]}>
      <View style={{width: '100%'}}>
        <NavigationHeader
          leftComponent={<ArrowBackBlack />}
          rightComponent={<MoreIcon styles={{marginRight: 16}} />}
          centerComponent={
            <MyTextMulish style={{fontSize: 20, fontWeight: '700'}}>
              {user.username}
            </MyTextMulish>
          }
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginTop: 10, width: '100%'}}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <BegerProfileCard user={user} />
          <MyButton
            inverse
            title={follow._id ? 'Unfollow' : 'Follow'}
            onPress={onFollowPress}
            loading={loading}
            disabled={loading}
            style={{
              height: 36,
              borderRadius: 4,
              backgroundColor: 'transparent',
              borderColor: 'rgba(0, 0, 0, 0.12)'
            }}
          />
          <View style={{marginBottom: 20}} />
        </View>
        {/* <HomeBeg data={{}} />
        <HomeBeg data={{}} /> */}
      </ScrollView>
    </View>
  );
};
