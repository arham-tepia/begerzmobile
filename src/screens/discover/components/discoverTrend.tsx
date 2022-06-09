import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  FlatList
} from 'react-native';
import {ArrowRight} from '../../../components/icons/arrowRight';
import {HashtagIcon} from '../../../components/icons/hashtagIcon';
import {MyTextMulish} from '../../../components/textMulish';
import {COLORS} from '../../../constants/colors';
import {ICONS} from '../../../constants/icons';

export const DiscoverTrend = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const uri = 'https://source.unsplash.com/random';

  function renderImages({item}: any) {
    return (
      <TouchableOpacity style={styles.imgContainer}>
        <Image source={ICONS.noimage} style={styles.img} />
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.main}>
      <View style={styles.topRow}>
        <View style={styles.rowElement1}>
          <HashtagIcon />
          <View style={{marginLeft: 13}}>
            <MyTextMulish style={[styles.title]}>SuccessBeggerz</MyTextMulish>
            <MyTextMulish style={[styles.subtitle]}>Trending</MyTextMulish>
          </View>
        </View>
        <TouchableOpacity style={styles.rowElement2}>
          <MyTextMulish style={[styles.viewall, {marginRight: 10}]}>
            View All
          </MyTextMulish>
          <ArrowRight />
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={renderImages}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    marginTop: 26,
    borderBottomWidth: 1,
    paddingBottom: 16,
    borderColor: '#eeeeee'
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  rowElement1: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '70%'
    // borderWidth: 1
  },
  rowElement2: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000'
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: 'grey'
  },
  viewall: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '600'
  },
  img: {
    width: 113,
    height: 98,
    borderRadius: 10
  },
  imgContainer: {
    width: 113,
    height: 98,
    borderRadius: 10,
    marginRight: 1
  }
});
