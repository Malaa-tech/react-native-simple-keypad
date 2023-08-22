# react-native-simple-keypad

A simple, easy to use, and beautiful keypad component for react native

## 🖥️Example App Demo
run it your self using `yarn example [ios/andriod]`

## 📦Installation

```sh
npm install react-native-simple-keypad
```
or
```sh
yarn add react-native-simple-keypad
```

## ⚒️Usage

```js
import * as React from 'react';
import { View } from 'react-native';
import Keypad from 'react-native-simple-keypad';

export default function App() {
  return (
    <View style={{ justifyContent: 'center', height: '100%' }}>
      <Keypad
        onKeyPress={(value) => console.log(`${value} is pressed`)}
        showBioMetric
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

```

## 🤝Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
