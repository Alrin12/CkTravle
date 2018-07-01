import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import {Container, BigCircleLayout, CenterPositionItem} from "../ui/Theme";

export default class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      subtitle: this.props.subtitle,
      imageSource: this.props.image,
    };
    console.log(this.state.imageSource);
  };


  render() {
    return (
      <View style={[Container, style.cardSize]}>
        <ImageBackground
          resizeMode={'cover'}
          style={[CenterPositionItem, style.imageSize]}
          source={this.state.imageSource}
        >
            <Text style={style.text}>{this.state.title}</Text>
        </ImageBackground>
      </View>
    );
  };
};

const style = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
  },

  cardSize: {
    width: 300,
    height: 400
  },

  imageSize: {
    flex: 1,
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: 'rgba(0,0,0,0)',
    width: 300,
    height: 400,
    overflow: 'hidden',
  },
});