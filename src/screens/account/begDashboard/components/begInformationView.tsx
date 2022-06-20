import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Image} from 'react-native';
import {Margin} from '../../../../components/margin';
import {MyButton} from '../../../../components/myButton';
import {MyTextInput} from '../../../../components/myTextinput';
import {MyTextMulish} from '../../../../components/textMulish';
import {COLORS} from '../../../../constants/colors';
import {ICONS} from '../../../../constants/icons';

export const BegInformationView = () => {
  return (
    <View style={styles.main}>
      <Margin top margin={37} />
      <MyTextMulish style={styles.title}>Beg Information</MyTextMulish>
      <Margin top margin={28} />
      <MyTextInput label="Title" editable={false} value="Beg Title" />
      <Margin top margin={31} />
      <MyTextInput label="Goal" editable={false} value="$1500" />
      <Margin top margin={31} />
      <MyTextInput label="End Date" editable={false} value="10/10/2022" />
      <Margin top margin={31} />
      <MyTextMulish style={styles.title}>Video / Images</MyTextMulish>
      <Margin top margin={11} />
      <MyTextMulish style={[styles.subtitle, {width: '70%'}]}>
        The cover video/ image will display as the main preview image for your
        Beg. You can add up to 5 total videos or Images.
      </MyTextMulish>
      <Margin top margin={5} />
      <Image source={ICONS.noimage} style={{height: 285, width: '100%'}} />
      <Margin top margin={5} />
      <View style={styles.row}>
        <MyTextMulish style={[styles.begTitle, {maxWidth: '70%'}]}>
          My Beg Title
        </MyTextMulish>
        <MyTextMulish
          style={[styles.begTitle, {fontSize: 13, color: COLORS.primary}]}>
          Remove
        </MyTextMulish>
      </View>
      <Margin top margin={3} />
      <MyTextMulish style={styles.link}>viemo.com/q9047/38</MyTextMulish>
      <Margin top margin={37} />
      <MyButton
        title="+ Add Video"
        inverse
        style={{height: 44, borderRadius: 100}}
        textStyles={{fontWeight: '700', fontSize: 13}}
      />
      <Margin top margin={19} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '95%'
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    color: '#000000'
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 13,
    color: '#000000'
  },
  begTitle: {
    fontWeight: '700',
    fontSize: 20,
    color: '#000000'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  link: {
    fontSize: 17,
    fontWeight: '400',
    color: 'black'
  }
});
