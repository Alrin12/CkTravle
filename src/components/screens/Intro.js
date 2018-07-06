import React, {Component} from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import ImageCard from '../partials/ImageCard';
import {Container, ContainerBackgroundColor} from "../ui/Theme";
import {store} from "../../stores/store";

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationImage: store.locationImage,
    }
  };

  navigateToInfoScreen = () => {
    this.props.navigation.navigate('InfoScreen');
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={[style.contentContainer, ContainerBackgroundColor]}
        style={style.header}
      >
        <View style={style.headerWrapper}>
          <Text style={style.header}>어디로 떠날까요?</Text>
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
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerWrapper: {
    paddingTop: 10,
    paddingBottom: 20,
  },

  header: {
    fontSize: 30,
    fontWeight: '500',
    fontFamily: 'NanumSquareB'
  }

})