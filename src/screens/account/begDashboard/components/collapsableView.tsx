import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ArrowDownBlack} from '../../../../components/icons/arrowDownBlack';
import {ArrowRightBlack} from '../../../../components/icons/arrowRightBlack';
import {Margin} from '../../../../components/margin';
import {BellSvg} from '../../../../components/svgs/bell';
import {EditSvg} from '../../../../components/svgs/edit';
import {GolfSvg} from '../../../../components/svgs/golf';
import {HandSvg} from '../../../../components/svgs/hand';
import {MyTextMulish} from '../../../../components/textMulish';
import {COLORS} from '../../../../constants/colors';

interface Props {
  name?: string;
  title?: string;
  bell?: boolean;
  golf?: boolean;
  hand?: boolean;
  edit?: boolean;
  children?: any;
}

export const CollapseableView = (props: Props) => {
  const {bell, golf, edit, hand, children} = props;
  const [state, setState] = useState(false);
  function iconToDisplay() {
    if (bell) {
      return <BellSvg color={state ? COLORS.primary : '#000000'} />;
    }
    if (golf) {
      return <GolfSvg color={state ? COLORS.primary : '#000000'} />;
    }
    if (hand) {
      return <HandSvg color={state ? COLORS.primary : '#000000'} />;
    }
    if (edit) {
      return <EditSvg color={state ? COLORS.primary : '#000000'} />;
    }
    return null;
  }
  function arrowToDisplay() {
    return <>{state ? <ArrowDownBlack /> : <ArrowRightBlack />}</>;
  }

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setState(!state)} style={styles.top}>
        <View style={styles.innerRow}>
          <Margin right margin={15} />
          {iconToDisplay()}
          <MyTextMulish style={[styles.title, state && {fontWeight: '700'}]}>
            {props.title ?? ''}
          </MyTextMulish>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {arrowToDisplay()}
          <Margin right margin={13} />
        </View>
      </TouchableOpacity>
      {state && children}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'rgba(222, 222, 222, 1)'
  },
  top: {
    minHeight: 59,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between'
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    color: '#000000',
    marginLeft: 20
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '80%'
  }
});
