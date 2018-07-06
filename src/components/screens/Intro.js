import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import ImageCard from '../partials/ImageCard';
import {store} from "../../stores/store";
// styles
import {ScrollContainer, ContainerBackgroundColor, headerText, headerWrapper} from "../ui/Theme";

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationImage: store.location,
    }
  };

  navigateToInfoScreen = () => {
    this.props.navigation.navigate('InfoScreen');
  }

  render() {
    return (
      <ScrollView
        style={[ScrollContainer, ContainerBackgroundColor]}
      >
        <View style={headerWrapper}>
          <Text style={headerText}>어디로 떠날까요?</Text>
        </View>
        <View style={style.contentWrapper}>
          {
            this.state.locationImage.map((content, index) => {
              return (
                <ImageCard
                  image={content.image}
                  title={content.name}
                  subtitle={content.subtitle}
                  key={index}
                  action={this.navigateToInfoScreen}
                  width={300}
                  height={420}
                  blur={true}
                  shadow={true}
                  borderRadius={20}
                />
              )
            })
          }
        </View>
      </ScrollView>
    );
  };
};

const style = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})