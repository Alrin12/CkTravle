import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, ContainerBackgroundColor, CenterPositionItem} from "../ui/Theme";

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return(
      <View style={[Container, ContainerBackgroundColor]}>
        <View style={[CenterPositionItem, style.padding]}>
          <View style={style.smallImageCard}>
          </View>
        </View>
      </View>
    )
  };
};

const style = StyleSheet.create({
  padding: {
    paddingTop: 20,
  },

  smallImageCard: {
    width: 325,
    height: 200,
  }
});