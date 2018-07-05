import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Container} from "../Theme";

export default class RoundedButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      action: this.props.action,
    };
  };

  actionHandler = () => {
   this.state.action();
  };

  render() {
    return (
      <TouchableOpacity
        style={style.rounded}
        onPress={this.actionHandler}
      >
        <Text style={style.text}>{this.state.title}</Text>
      </TouchableOpacity>
    );
  };
};

const style = StyleSheet.create({
  rounded: {
    width: 60,
    height: 18,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0)',
    borderRadius: 30,
    backgroundColor: '#0A65FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontSize: 10,
    fontWeight: '900',
  }
})