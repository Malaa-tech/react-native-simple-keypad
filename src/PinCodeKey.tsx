import React from 'react';
import {
  Animated,
  type ColorValue,
  Easing,
  Pressable,
  Text,
  type TextStyle,
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
  animated = false,
  animationProps,
}: {
  item: string | number;
  onKeyPress: (value: any) => void;
  textStyle: TextStyle;
  onBioAuthPress?: () => void;
  backspaceIcon?: React.ReactElement;
  bioMetricAuthIcon?: React.ReactElement;
  backspaceIconFillColor: ColorValue;
  backspaceIconStrokeColor: ColorValue;
  bioMetricFillColor: ColorValue;
  backspaceIconHeight: NumberProp;
  backspaceIconWidth: NumberProp;
  bioMetricIconHeight: NumberProp;
  bioMetricIconWidth: NumberProp;
  disable?: boolean;
  animated?: boolean;
  animationProps?: {
    activeColor?: string;
    activeTextScale?: number;
    pressInDuration?: number;
    pressOutDuration?: number;
  };
}) {
  // animations
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const anim = React.useRef(new Animated.Value(0)).current;

  const bgColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [
      'transparent',
      animationProps?.activeColor ?? 'rgba(255, 255, 255, 0.24)',
    ],
  });
  const textScale = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, animationProps?.activeTextScale ?? 0.85],
  });

  const pressIn = () => {
    Animated.timing(anim, {
      toValue: 1,
      duration: animationProps?.pressInDuration ?? 150,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  };

  const pressOut = () => {
    Animated.timing(anim, {
      toValue: 0,
      duration: animationProps?.pressOutDuration ?? 250,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true,
    }).start();
  };
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
      return undefined;
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
    if (animated === true) {
      return (
        <Animated.View style={[{ transform: [{ scale: textScale }] }]}>
          <Text style={textStyle}>{item}</Text>
        </Animated.View>
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
  if (animated) {
    return (
      <AnimatedPressable
        onPress={() => getOnPress()}
        onPressIn={pressIn}
        onPressOut={pressOut}
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            borderRadius: 12,
            backgroundColor: bgColor,
          },
        ]}
        disabled={disable}
      >
        {getContent()}
      </AnimatedPressable>
    );
  }
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
