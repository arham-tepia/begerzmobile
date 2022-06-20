import React, {FunctionComponent} from 'react';
import {
  Modal,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';

interface ModalView {
  visible: boolean;
  onCancelPress?(): void;
  mainContainerStyles?: StyleProp<ViewStyle>;
  contentContainerStyles?: StyleProp<ViewStyle>;
  topViewStyle?: StyleProp<ViewStyle>;
  children?: any;
}

export const BottomCard = (props: ModalView) => {
  const {visible, onCancelPress, mainContainerStyles, children} = props;
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={[styles.modalView1, mainContainerStyles]}>
        <TouchableOpacity
          onPress={onCancelPress}
          style={[{height: '8%', width: '100%'}, props.topViewStyle]}
        />
        <View style={[styles.modalView2, props.contentContainerStyles]}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView1: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  modalView2: {
    backgroundColor: 'white',
    height: '92%',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5
  }
});
