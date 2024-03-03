import React from 'react';
import { type TextStyle, type ColorValue } from 'react-native';
import type { NumberProp } from 'react-native-svg';
import PinCodeRow from './PinCodeRow';
import PinCodeKey from './PinCodeKey';

export const Keypad = ({
  onKeyPress,
  textStyle = {},
  backspaceIcon,
  bioMetricAuthIcon,
  rowReverse = false,
  backspaceIconFillColor = '#000000',
  backspaceIconStrokeColor = '#FFFFFF',
  bioMetricFillColor = '#000000',
  backspaceIconHeight = 24,
  backspaceIconWidth = 33,
  bioMetricIconHeight = 28,
  bioMetricIconWidth = 28,
  onBioAuthPress,
  disable = false,
}: {
  onKeyPress: (value: any) => void;
  textStyle?: TextStyle;
  rowReverse?: boolean;
  backspaceIcon?: JSX.Element;
  bioMetricAuthIcon?: JSX.Element;
  backspaceIconFillColor?: ColorValue;
  backspaceIconStrokeColor?: ColorValue;
  bioMetricFillColor?: ColorValue;
  backspaceIconHeight?: NumberProp;
  backspaceIconWidth?: NumberProp;
  bioMetricIconHeight?: NumberProp;
  bioMetricIconWidth?: NumberProp;
  onBioAuthPress?: () => void;
  disable?: boolean;
}) => {
  // ---------------------------------------------------
  // @ Defaults
  // ---------------------------------------------------
  const keys = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['auth', 0, 'delete'],
  ];

  // ---------------------------------------------------
  // @ Main View
  // ---------------------------------------------------
  return (
    <>
      {keys.map((list: any, index: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <PinCodeRow rowReverse={rowReverse} key={`${index}-keypad-row`}>
          {list.map((item: string | number) => (
            <PinCodeKey
              key={`${item}-keypad-key`}
              item={item}
              textStyle={textStyle}
              backspaceIconFillColor={backspaceIconFillColor}
              backspaceIconStrokeColor={backspaceIconStrokeColor}
              bioMetricFillColor={bioMetricFillColor}
              backspaceIconHeight={backspaceIconHeight}
              backspaceIconWidth={backspaceIconWidth}
              bioMetricIconHeight={bioMetricIconHeight}
              bioMetricIconWidth={bioMetricIconWidth}
              backspaceIcon={backspaceIcon}
              bioMetricAuthIcon={bioMetricAuthIcon}
              onKeyPress={onKeyPress}
              onBioAuthPress={onBioAuthPress}
              disable={disable}
            />
          ))}
        </PinCodeRow>
      ))}
    </>
  );
};

export default Keypad;
