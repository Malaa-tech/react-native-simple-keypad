import type { PropsWithChildren } from 'react';
import React from 'react';
import { type StyleProp, View, type ViewStyle } from 'react-native';

function PinCodeRow({
  rowReverse = false,
  children,
  style,
}: PropsWithChildren<{ rowReverse: boolean; style?: StyleProp<ViewStyle> }>) {
  return (
    <View
      style={[
        {
          flexDirection: rowReverse ? 'row-reverse' : 'row',
          width: '100%',
          minHeight: '11%',
          paddingHorizontal: 2,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

export default PinCodeRow;
