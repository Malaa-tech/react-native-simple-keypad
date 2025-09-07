import React, { type ComponentProps } from 'react';
import type {
  ColorValue,
  RegisteredStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import type { NumberProp } from 'react-native-svg';
import PinCodeKey from './PinCodeKey';
import PinCodeRow from './PinCodeRow';

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
  animated = false,
  rowStyle,
  buttonStyle,
  animationProps,
}: {
  onKeyPress: (value: any) => void;
  textStyle?: TextStyle;
  rowReverse?: boolean;
  backspaceIcon?: React.ReactElement;
  bioMetricAuthIcon?: React.ReactElement;
  backspaceIconFillColor?: ColorValue;
  backspaceIconStrokeColor?: ColorValue;
  bioMetricFillColor?: ColorValue;
  backspaceIconHeight?: NumberProp;
  backspaceIconWidth?: NumberProp;
  bioMetricIconHeight?: NumberProp;
  bioMetricIconWidth?: NumberProp;
  onBioAuthPress?: () => void;
  disable?: boolean;
  animated?: boolean;
  rowStyle?: StyleProp<ViewStyle>;
  buttonStyle?: RegisteredStyle<ViewStyle>;
  animationProps?: ComponentProps<typeof PinCodeKey>['animationProps'];
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
      {keys.map((list: any) => (
        <PinCodeRow
          rowReverse={rowReverse}
          key={`row-${list.join('-')}`}
          style={rowStyle}
        >
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
              animated={animated}
              animationProps={animationProps}
              style={buttonStyle}
            />
          ))}
        </PinCodeRow>
      ))}
    </>
  );
};

export default Keypad;
