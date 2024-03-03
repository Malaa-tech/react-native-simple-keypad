import React from 'react';
import {
  type TextStyle,
  type ColorValue,
  Text,
  TouchableOpacity,
} from 'react-native';
import type { NumberProp } from 'react-native-svg';
import BackspaceKeyIcon from './BackspaceKeyIcon';
import BioMetricIcon from './BioMetricIcon';

function PinCodeKey({
  item,
  onKeyPress,
  textStyle,
  backspaceIcon,
  bioMetricAuthIcon,
  backspaceIconFillColor,
  backspaceIconStrokeColor,
  bioMetricFillColor,
  onBioAuthPress,
  backspaceIconHeight,
  backspaceIconWidth,
  bioMetricIconHeight,
  bioMetricIconWidth,
  disable = false,
}: {
  item: string | number;
  onKeyPress: (value: any) => void;
  textStyle: TextStyle;
  onBioAuthPress?: () => void;
  backspaceIcon?: JSX.Element;
  bioMetricAuthIcon?: JSX.Element;
  backspaceIconFillColor: ColorValue;
  backspaceIconStrokeColor: ColorValue;
  bioMetricFillColor: ColorValue;
  backspaceIconHeight: NumberProp;
  backspaceIconWidth: NumberProp;
  bioMetricIconHeight: NumberProp;
  bioMetricIconWidth: NumberProp;
  disable?: boolean;
}) {
  // ---------------------------------------------------
  // @ Helper Functions
  // ---------------------------------------------------
  const getContent = () => {
    if (item === 'auth') {
      if (onBioAuthPress) {
        return (
          <>
            {bioMetricAuthIcon || (
              <BioMetricIcon
                height={backspaceIconHeight}
                width={backspaceIconWidth}
                fill={backspaceIconFillColor}
                stroke={backspaceIconStrokeColor}
              />
            )}
          </>
        );
      }
    }
    if (item === 'delete') {
      return (
        <>
          {backspaceIcon || (
            <BackspaceKeyIcon
              color={bioMetricFillColor}
              height={bioMetricIconHeight}
              width={bioMetricIconWidth}
            />
          )}
        </>
      );
    }
    return <Text style={textStyle}>{item}</Text>;
  };

  const getOnPress = () => {
    if (item === 'auth') {
      return onBioAuthPress ? onBioAuthPress() : null;
    }
    return onKeyPress(item);
  };

  // ---------------------------------------------------
  // @ Main View
  // ---------------------------------------------------
  return (
    <TouchableOpacity
      onPress={() => getOnPress()}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
      disabled={disable}
    >
      {getContent()}
    </TouchableOpacity>
  );
}

export default PinCodeKey;
