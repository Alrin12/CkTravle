/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {SafeAreaView, createStackNavigator} from 'react-navigation';
import Intro from './src/components/screens/Intro';
import {Container, ContainerBackgroundColor} from "./src/components/ui/Theme";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={[Container, ContainerBackgroundColor]}>
        <RootStack/>
      </SafeAreaView>
    );
  };
};


const RootStack = createStackNavigator(
  {
    IntroScreen: {screen: Intro},
  },
  {
    initialRouteName: 'IntroScreen',
    headerMode: 'none',
  }
);

const style = StyleSheet.create({

})