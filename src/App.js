import React, {PureComponent} from 'react';
import { View } from 'react-native';
import Screen from './components/screens/Screen';

export default class App extends PureComponent {
  render() {
    return (
      <View>
        <Screen />
      </View>
    );
  }
}
