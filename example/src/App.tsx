import * as React from 'react';
import { View } from 'react-native';
import Keypad from 'react-native-simple-keypad';

function App() {
  return (
    <View style={{ justifyContent: 'center', height: '100%' }}>
      <Keypad
        onKeyPress={(value) => console.log(`${value} is pressed`)}
        textStyle={{ fontWeight: '600', fontSize: 30 }}
        backspaceIconFillColor="#000000"
        backspaceIconStrokeColor="#FFFFFF"
        bioMetricFillColor="#000000"
        backspaceIconHeight={24}
        backspaceIconWidth={33}
        bioMetricIconHeight={28}
        bioMetricIconWidth={28}
        onBioAuthPress={() => console.log('Bio Auth')}
      />
    </View>
  );
}

export default App;
