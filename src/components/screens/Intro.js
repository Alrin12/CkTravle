import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import Location from '../Partials/Location';
import {Container, ContainerBackgroundColor} from "../ui/Theme";
import {store} from "../../stores/store";

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationImage: store.locationImage,
    }
  };

  render() {
    return (
      <ScrollView
        contentContainerStyle={[style.contentContainer, style.centerPosition, ContainerBackgroundColor]}
      >
        {
          this.state.locationImage.map((content, index) => {
            return (
              <Location image={content.image}
                        title={content.name}
                        key={index}
              />
            )
          })
        }
      </ScrollView>
    );
  };
};

const style = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
  },

  centerPosition: {
    justifyContent: 'center',
    alignItems: 'center',
  },

})