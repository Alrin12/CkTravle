import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, findNodeHandle} from 'react-native';
import {Container, BottomPositionItem} from "../ui/Theme";
import {BlurView} from 'react-native-blur';
import RoundedButton from '../ui/buttons/RoundedButton';

const RESTRICT_TITLE_LENGTH = 7;
const RESTRICT_SUBTITLE_LENGTH = 16;

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      subtitle: this.props.subtitle,
      imageSource: this.props.image,
      viewRef: null,
    };
    console.log(this.state.imageSource);
  };

  imageLoaded() {
    this.setState({viewRef: findNodeHandle(this.backgroundImage)})
  };

  renderTitle() {
    const _title = this.state.title;
    const _length = _title.length;

    if(!_length || _length > RESTRICT_TITLE_LENGTH) {
      const _string = _title.substring(0, RESTRICT_TITLE_LENGTH - 1) + '...';
      return <Text style={style.title}>{_string}</Text>;
    } else {
      return <Text style={style.title}>{_title}</Text>;
    };
  };

  renderSubtitle() {
    const _subtitle = this.state.subtitle;
    const _length = _subtitle.length;

    if (_length > RESTRICT_SUBTITLE_LENGTH) {
      const _string = _subtitle.substring(0, RESTRICT_SUBTITLE_LENGTH - 1) + '...';
      return <Text style={style.subtitle}>{_string}</Text>;
    } else {
      return <Text style={style.subtitle}>{_subtitle}</Text>;
    };
  };

  render() {
    return (
      <View style={[Container, style.cardLayout]}>
        <ImageBackground
          ref={(img) => {
            this.backgroundImage = img
          }}
          resizeMode={'cover'}
          style={[BottomPositionItem, style.imageLayout]}
          source={this.state.imageSource}
          onLoadEnd={this.imageLoaded.bind(this)}
        >
          <BlurView
            style={style.blurLayout}
            viewRef={this.state.viewRef}
            blurType={'light'}
            blurAmount={25}
          >
            <View>
              {
                this.renderTitle()
              }

              {
                this.renderSubtitle()
              }
            </View>
            <RoundedButton
              title={'자세히보기'}
            />
          </BlurView>
        </ImageBackground>
      </View>
    );
  };
};

const style = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },

  subtitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },

  cardLayout: {
    width: 300,
    height: 400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#9f9f9f',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 1,
    marginBottom: 70,
  },

  imageLayout: {
    flex: 1,
    width: 300,
    height: 400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },

  blurLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
    height: 60,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: 'rgba(0,0,0,0)',
  },
});