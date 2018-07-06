import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, findNodeHandle} from 'react-native';
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
      action: this.props.action,
      width: this.props.width,
      height: this.props.height,
      // Style Configure
      needBlur: this.props.blur,
      needBorderRadius: this.props.borderRadius,
      needShadow: this.props.shadow,
    };
  };

  needShadow() {
    if(this.state.needShadow) {
      return {
        shadowOpacity: 1,
      }
    } else {
      return {
        shadowOpacity: 0,
      }
    }
  };

  needBorderRadius() {
    if(this.state.needBorderRadius) {
      return {
        borderTopLeftRadius: this.state.needBorderRadius,
        borderTopRightRadius: this.state.needBorderRadius,
        borderBottomLeftRadius: this.state.needBorderRadius,
        borderBottomRightRadius: this.state.needBorderRadius
      }
    } else {
      return;
    }
  }

  getContainerSize() {
    if (this.state.width && this.state.height) {
      return {
        width: this.state.width,
        height: this.state.height,
      };
    }
    else {
      return {
        width: 300,
        height: 420,
      };
    }
  };

  getBlurSize() {
    if (this.state.needBlur && this.state.width && this.state.height) {
      return {
        width: this.state.width,
        height: this.state.height / 7,
      }
    }
    return null;
  };

  imageLoaded() {
    this.setState({viewRef: findNodeHandle(this.backgroundImage)})
  };

  renderTitle() {
    const _title = this.state.title;
    const _length = _title.length;

    if (!_length || _length > RESTRICT_TITLE_LENGTH) {
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
      <View style={[
        Container,
        style.cardLayout,
        this.getContainerSize(),
        this.needBorderRadius(),
        this.needShadow()
      ]}>
        <ImageBackground
          ref={(img) => {
            this.backgroundImage = img
          }}
          resizeMode={'cover'}
          style={[
            BottomPositionItem,
            style.imageLayout,
            this.getContainerSize(),
            this.needBorderRadius(),
          ]}
          source={this.state.imageSource}
          onLoadEnd={this.imageLoaded.bind(this)}
        >
          {
            this.state.needBlur &&
            <BlurView
              style={[style.blurLayout, this.getBlurSize()]}
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
                action={this.state.action}
              />
            </BlurView>
          }
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
    shadowColor: '#9f9f9f',
    shadowOffset: {width: 3, height: 3},
    marginBottom: 70,
  },

  imageLayout: {
    flex: 1,
    overflow: 'hidden',
  },

  blurLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: 'rgba(0,0,0,0)',
  },
});