import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {store} from "../../stores/store";
import ImageCard from '../partials/ImageCard';
// external library
import Swiper from 'react-native-swiper';
// styles
import {ScrollContainer, ContainerBackgroundColor, headerWrapper, headerText} from "../ui/Theme";

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: store.attraction,
    };
  };

  render() {
    return (
      <ScrollView style={[ScrollContainer, ContainerBackgroundColor]}>
        <View style={[style.padding]}>
          <View style={headerWrapper}>
            <Text style={headerText}>인기있는 관광 포인트</Text>
          </View>
          <Swiper
            height={320}
            loop={false}
            showsPagination={false}
          >
            {
              this.state.dummy.map((content, index) => {
                return (
                  <View style={style.slide}>
                    <View style={style.contentHeaderWrapper}>
                      <Text style={style.contentTitle}>{content.name}</Text>
                      <Text style={style.contentSubtitle}>{content.subtitle}</Text>
                    </View>
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
                  </View>
                )
              })
            }
          </Swiper>
        </View>
      </ScrollView>
    )
  };
};

const style = StyleSheet.create({
  padding: {
    // paddingTop: 20,
  },

  smallImageCard: {
    width: 325,
    height: 200,
  },

  slide: {
    flex: 1,
    alignItems: 'center',
  },

  content: {},

  contentHeaderWrapper: {
    alignSelf: 'flex-start',
  },

  contentTitle: {
    fontSize: 23,
    fontWeight: '300',
  },

  contentSubtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#6d6d6d'
  }
});