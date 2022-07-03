import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {ArrowBackBlack} from '../../../components/icons/arowBackBlack';
import {MoreIcon} from '../../../components/icons/moreIcon';
import {MyButton} from '../../../components/myButton';
import {NavigationHeader} from '../../../components/navigationHeader';
import {MyTextMulish} from '../../../components/textMulish';
import {commonStyles} from '../../../styles/styles';
import {HomeBeg} from '../../home/components/homeBeg';
import {BegerProfileCard} from './components/begerProfileCard';

export const BegerProfile = ({route}: any) => {
  useEffect(() => {
    console.log(user, 'user');
  }, []);
  const user = route.params.user;
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
            title="Follow"
            style={{
              height: 36,
              borderRadius: 4,
              backgroundColor: 'transparent',
              borderColor: 'rgba(0, 0, 0, 0.12)'
            }}
          />
          <View style={{marginBottom: 20}} />
        </View>
        <HomeBeg data={{}} />
        <HomeBeg data={{}} />
      </ScrollView>
    </View>
  );
};
