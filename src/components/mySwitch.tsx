import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {COLORS} from '../constants/colors';

interface Props {
  isOn: boolean;
  onToggle?(val: boolean): void;
}

export const MySwitch = (props: Props) => {
  return (
    <ToggleSwitch
      isOn={props.isOn}
      trackOnStyle={{backgroundColor: COLORS.primary}}
      trackOffStyle={{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: COLORS.primary
      }}
      thumbOffStyle={{backgroundColor: COLORS.primary}}
      thumbOnStyle={{backgroundColor: 'white'}}
      size="small"
      onToggle={props.onToggle}
    />
  );
};
