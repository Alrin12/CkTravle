import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {Container, ContainerBackgroundColor, CenterPositionItem} from "../ui/Theme";
import {store} from "../../stores/store";
import ImageCard from '../partials/ImageCard';

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: store.locationImage,
    };
  };

  render() {
    console.log('hi');
    return (
      <ScrollView style={[Container, ContainerBackgroundColor]}>
        <View style={[CenterPositionItem, style.padding]}>
          {
            this.state.dummy.map((content, index) => {
              return (
                <ImageCard
                  image={content.image}
                  title={'test'}
                  subtitle={'test'}
                  action={null}
                  key={index}
                  width={325}
                  height={200}
                  blur={false}
                />
              )
            })
          }
        </View>
      </ScrollView>
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