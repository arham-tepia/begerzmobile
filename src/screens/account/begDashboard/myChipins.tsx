import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Share,
  Alert
} from 'react-native';
import {RootStateOrAny, useSelector} from 'react-redux';
import {getChipinsMadeByAUser} from '../../../api/user';
import {InfoIcon} from '../../../components/icons/info';
import {InfoPinkIcon} from '../../../components/icons/infoPink';
import {KarmaBlueIcon} from '../../../components/icons/karmaBlue';
import {ShareIcon} from '../../../components/icons/share';
import {StarColored} from '../../../components/icons/starColored';
import {Margin} from '../../../components/margin';
import {MyButton} from '../../../components/myButton';
import {MyTextMulish} from '../../../components/textMulish';
import {COLORS} from '../../../constants/colors';
import {KARMA_LEVELS} from '../../../constants/karma';
import {ConvertDateStringToObject} from '../../../helpers/formatDateObject';
import {commonStyles} from '../../../styles/styles';
import {Divider} from '../../beg/post/components/divider';
import {MyChipInsData} from './components/dummyData';

export const MyChipInsAndKarma = () => {
  const user = useSelector((state: RootStateOrAny) => state.currentUser);
  const [data, setData]: any = useState([]);
  const [loader, setLoader]: any = useState(false);
  async function GetData() {
    setLoader(true);
    const res = await getChipinsMadeByAUser(user.id).finally(() =>
      setLoader(false)
    );
    setData(res.results);
    console.log(res, 'Results');
  }

  useEffect(() => {
    GetData();
  }, []);

  function calculateKarmaLevel() {
    const points = user.karma ? parseInt(user.karma) : 0;
    if (points >= 0 && points <= 200) return KARMA_LEVELS.flowerPetal1;
    if (points >= 201 && points <= 500) return KARMA_LEVELS.flowerPetal2;
    if (points >= 501 && points <= 1500) return KARMA_LEVELS.flowerPetal3;
    if (points >= 1501 && points <= 3000) return KARMA_LEVELS.flowerPetal4;
    if (points >= 3001 && points <= 6000) return KARMA_LEVELS.flowerPetal5;
    if (points >= 6001 && points <= 12000) return KARMA_LEVELS.gold;
    if (points >= 12001 && points <= 24000) return KARMA_LEVELS.platnum;
    if (points >= 24001 && points <= 48000) return KARMA_LEVELS.fullFLower;
  }

  const onShare = async (begDetails: any) => {
    console.log(begDetails);

    try {
      const result = await Share.share({
        message: 'https://app.begerz.net/beg/details/' + begDetails._id,
        url: 'https://app.begerz.net/beg/details/' + begDetails._id
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  function CardElementRowHead() {
    return (
      <View style={styles.cardElementsRow}>
        <View style={[styles.elementBox, {width: '25%'}]}>
          <MyTextMulish style={[styles.cardElement]}>Chip-In Date</MyTextMulish>
        </View>
        <View style={[styles.elementBox, {width: '20%'}]}>
          <MyTextMulish style={[styles.cardElement]}>Amount</MyTextMulish>
        </View>
        <View style={[styles.elementBox, {width: '40%'}]}>
          <MyTextMulish style={[styles.cardElement]}>Beg Name</MyTextMulish>
        </View>
        <View style={[styles.elementBox, {width: '15%'}]}>
          <MyTextMulish style={[styles.cardElement]}>Share</MyTextMulish>
        </View>
      </View>
    );
  }
  function ChipInDataRow({item, index}: any) {
    const date = ConvertDateStringToObject(item.createdAt);
    console.log(item, 'Item');

    return (
      <View
        style={[
          styles.cardElementsRow,
          index % 2 === 0 && {backgroundColor: 'rgba(250, 250, 250, 1)'}
        ]}>
        <View style={[styles.elementBox, {width: '24%'}]}>
          <MyTextMulish style={[styles.cardElement]}>
            {date.monthNumber}/{date.date}/{date.year}
          </MyTextMulish>
        </View>
        <View style={[styles.elementBox, {width: '19%'}]}>
          <MyTextMulish style={[styles.cardElement, {}]}>
            ${item.amount}
          </MyTextMulish>
        </View>
        <View
          style={[
            styles.elementBox,
            {
              width: '39%'
              //alignItems: 'flex-start'
            }
          ]}>
          <MyTextMulish style={[styles.cardElement]}>
            {item.beg?.title ?? 'No Title'}
          </MyTextMulish>
        </View>
        <View style={[styles.elementBox, {width: '14%'}]}>
          <ShareIcon onPress={() => onShare(item)} />
        </View>
      </View>
    );
  }

  function renderChipinCard() {
    return (
      <View style={styles.chipinsCard}>
        {/* <View style={styles.cardTopRow}>
          <StarColored style={{height: 18, width: 18}} />
          <Margin right margin={12} />
          <MyTextMulish style={styles.karmaPointsText}>
            +2 Karma Points
          </MyTextMulish>
          <Margin right margin={10} />
          <InfoPinkIcon />
        </View>
        <View style={styles.cardBtnRow}>
          <MyButton
            inverse
            style={styles.cardBtn}
            title="Comments"
            textStyles={styles.btnTxtStyle}
          />
          <MyButton
            inverse
            style={styles.cardBtn}
            title="Share"
            textStyles={styles.btnTxtStyle}
          />
        </View>
        <Margin top margin={19} />
        <Divider style={{width: '100%'}} /> */}
        <CardElementRowHead />
        <FlatList
          data={data}
          renderItem={ChipInDataRow}
          scrollEnabled={false}
        />
      </View>
    );
  }

  return (
    <View style={[commonStyles.main, {backgroundColor: 'transparent'}]}>
      <ScrollView style={{width: '100%'}}>
        <View style={{width: '90%', marginTop: 10, alignSelf: 'center'}}>
          <MyTextMulish style={styles.title}>
            My Karma Points {<InfoIcon style={{height: 16, width: 16}} />}
          </MyTextMulish>
          <Margin top margin={15} />
          <View style={styles.topCardRow}>
            <View style={[styles.levelCard, {width: '48%'}]}>
              <Margin top margin={20} />
              <MyTextMulish
                style={[
                  styles.title,
                  {fontSize: 14, textAlign: 'center', width: '50%'}
                ]}>
                Total Karma Points
              </MyTextMulish>
              <Margin top margin={12} />

              <View style={styles.circle}>
                <MyTextMulish style={{fontSize: 21, color: 'white'}}>
                  {user.karma}
                </MyTextMulish>
              </View>
            </View>
            <View style={[styles.levelCard, {width: '48%'}]}>
              <Margin top margin={20} />
              <MyTextMulish
                style={[
                  styles.title,
                  {fontSize: 14, textAlign: 'center', width: '50%'}
                ]}>
                Begerz Karma Level
              </MyTextMulish>
              <Margin top margin={15} />
              <KarmaBlueIcon />
              <Margin top margin={12} />
              <MyTextMulish style={styles.levelCardSubTitle}>
                {calculateKarmaLevel()}
              </MyTextMulish>
            </View>
          </View>
          <Margin top margin={22} />
          <MyTextMulish style={styles.title}>
            My Chip-Ins {<InfoIcon style={{height: 16, width: 16}} />}
          </MyTextMulish>
          <Margin top margin={15} />
          {renderChipinCard()}
          <Margin top margin={40} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  chipinsCard: {
    borderRadius: 20,
    minHeight: 460,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%'
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 17,
    marginBottom: 16,
    width: '90%'
  },
  karmaPointsText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000000'
  },
  cardBtnRow: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  cardBtn: {
    height: 44,
    borderRadius: 100,
    width: '48%'
  },
  btnTxtStyle: {
    fontWeight: '700',
    fontSize: 13
  },
  cardElement: {
    fontWeight: '600',
    fontSize: 11,
    color: 'rgba(0, 0, 0, 0.87)'
  },
  cardElementsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 38,
    width: '100%'
  },
  elementBox: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: '#00000'
  },
  levelCard: {
    borderRadius: 20,
    width: '100%',
    minHeight: 195,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  levelCardSubTitle: {
    color: 'rgba(123, 123, 123, 1)',
    fontSize: 12,
    fontWeight: '500'
  },
  topCardRow: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  circle: {
    borderRadius: 84,
    height: 84,
    width: 84,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary
  }
});
