import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {BottomCard} from '../../../../components/bottomCard';
import {ArrowBackBlack} from '../../../../components/icons/arowBackBlack';
import {Margin} from '../../../../components/margin';
import {MyButton} from '../../../../components/myButton';
import {ICONS} from '../../../../constants/icons';
import {BegHeadings} from './begHeadings';

interface Props {
  visible: boolean;
  onClosePress?(): void;
  onOpenGallery?(): void;
  onOpenCamera?(): void;
}

export const AddVideoOptions = (props: Props) => {
  return (
    <BottomCard
      contentContainerStyles={{
        height: 250,
        alignItems: 'center',
        justifyContent: 'center'
      }}
      visible={props.visible}
      onCancelPress={props.onClosePress}>
      <View style={{width: '90%', alignSelf: 'center'}}>
        <TouchableOpacity onPress={props.onClosePress} style={styles.top}>
          <Image
            source={ICONS.arrowLeftBlack}
            style={{height: 18, width: 11}}
          />
          <Margin right margin={10} />
          <BegHeadings>Go Back</BegHeadings>
        </TouchableOpacity>
        <Margin bottom margin={30} />

        <MyButton
          style={styles.button}
          textStyles={styles.btnTxt}
          title="Open Gallery"
          onPress={props.onOpenGallery}
        />
        <Margin bottom margin={30} />
        <MyButton
          style={styles.button}
          title="Open Camera"
          onPress={props.onOpenCamera}
          textStyles={styles.btnTxt}
        />
        <Margin bottom margin={30} />
      </View>
    </BottomCard>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 100
  },
  btnTxt: {
    fontWeight: '600'
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
