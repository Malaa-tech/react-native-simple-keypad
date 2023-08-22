import React from 'react';
import type { PropsWithChildren } from 'react';
import { View } from 'react-native';

function PinCodeRow({
  rowReverse = false,
  children,
}: PropsWithChildren<{ rowReverse: boolean }>) {
  return (
    <View
      style={{
        flexDirection: rowReverse ? 'row-reverse' : 'row',
        width: '100%',
        minHeight: '11%',
        paddingHorizontal: 2,
      }}
    >
      {children}
    </View>
  );
}

export default PinCodeRow;
