import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ActivityIndicator
} from 'react-native';
import {textSearchForBegs} from '../../../api/beg';
import {ArrowRight} from '../../../components/icons/arrowRight';
import {HashtagIcon} from '../../../components/icons/hashtagIcon';
import {MyTextMulish} from '../../../components/textMulish';
import {COLORS} from '../../../constants/colors';
import {ICONS} from '../../../constants/icons';

interface Props {
  tag: string;
  navigation?: any;
  onViewAllPress?(): void;
}

export const DiscoverTrend = (props: Props) => {
  // const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const uri = 'https://source.unsplash.com/random';
  const [data, setData]: any = useState([]);
  const [loading, setLoading]: any = useState(false);
  async function GetData() {
    setLoading(true);
    const res = await textSearchForBegs({terms: '#' + props.tag}).finally(() =>
      setLoading(false)
    );
    setData(res.results);
    console.log(res, 'Results for ' + props.tag);
  }

  function renderImages({item}: any) {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('discover-begDetailsStack', {beg: item})
        }
        style={styles.imgContainer}>
        <Image source={{uri: item.videos[0].thumbLink}} style={styles.img} />
      </TouchableOpacity>
    );
  }

  useEffect(() => {
    GetData();
  }, []);
  if (data.length >= 1) {
    return (
      <View style={styles.main}>
        <View style={styles.topRow}>
          <View style={styles.rowElement1}>
            <HashtagIcon />
            <View style={{marginLeft: 13}}>
              <MyTextMulish style={[styles.title]}>{props.tag}</MyTextMulish>
              <MyTextMulish style={[styles.subtitle]}>Trending</MyTextMulish>
            </View>
          </View>
          <TouchableOpacity
            onPress={props.onViewAllPress}
            style={styles.rowElement2}>
            {!loading && (
              <>
                <MyTextMulish style={[styles.viewall, {marginRight: 10}]}>
                  View All
                </MyTextMulish>
                <ArrowRight />
              </>
            )}
          </TouchableOpacity>
        </View>
        {loading ? (
          <ActivityIndicator size={'small'} color={COLORS.primary} />
        ) : (
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={renderImages}
            horizontal
          />
        )}
      </View>
    );
  } else {
    return <View />;
  }
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
