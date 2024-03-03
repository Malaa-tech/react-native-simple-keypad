import * as React from 'react';
import { View } from 'react-native';
import Keypad from 'react-native-simple-keypad';
import Svg, { Path } from 'react-native-svg';

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
        bioMetricAuthIcon={
          <Svg width={27} height={27} viewBox="0 0 27 27">
            <Path
              d="M19.3516 8.20833V10.1458M7.72656 8.20833V10.1458M14.8307 14.1501C13.7974 14.1501 12.8932 13.246 12.8932 12.2126V8.20833M9.40548 17.5083C11.7305 19.8333 15.4763 19.8333 17.8013 17.5083M25.1641 7.95L25.1641 18.8C25.1641 20.9702 25.1641 22.0553 24.7417 22.8842C24.3702 23.6133 23.7774 24.2061 23.0483 24.5776C22.2194 25 21.1343 25 18.9641 25H8.11406C5.94386 25 4.85876 25 4.02985 24.5777C3.30072 24.2061 2.70792 23.6133 2.33641 22.8842C1.91406 22.0553 1.91406 20.9702 1.91406 18.8V7.95C1.91406 5.7798 1.91406 4.6947 2.33641 3.86579C2.70792 3.13666 3.30072 2.54386 4.02985 2.17235C4.85876 1.75 5.94386 1.75 8.11406 1.75L18.9641 1.75C21.1343 1.75 22.2194 1.75 23.0483 2.17235C23.7774 2.54386 24.3702 3.13666 24.7417 3.86579C25.1641 4.69469 25.1641 5.7798 25.1641 7.95Z"
              stroke="white"
              strokeWidth={2.05469}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        }
      />
    </View>
  );
}

export default App;
