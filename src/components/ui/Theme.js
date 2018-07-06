import {Platform} from "react-native";

export const ContainerBackgroundColor = {
  backgroundColor: 'white',
};

export const Container = {
  flex: 1, backgroundColor: 'white', flexDirection: 'column',
};

export const headerWrapper = {
  paddingTop: 10,
  paddingBottom: 20,
};

export const ScrollContainer = {
  paddingVertical: 20,
  paddingHorizontal: 20,
};

export const headerText = {
  fontSize: 27,
  fontWeight: '500',
  fontFamily: 'NanumSquareB'
};



export const CenterPositionItem = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const BottomPositionItem = {
  justifyContent: 'flex-end',
};

export const BigCircleLayout = {
  flex: 1,
  borderWidth: 1,
  borderColor: '#46d2ff',
  borderRadius: 150,
  width: 300,
  height: 300,
};

export const DebugLayout = {
  borderWidth: 1, borderColor: 'black',
};

export const DebugLayoutBlue = {
  borderWidth: 1, borderColor: 'blue',
};

export const TitleText = {
  fontSize: 24,
  color: 'black',
  fontFamily: 'NanumSquareEB',
};

export const LargeSubtitleText = {
  fontSize: 21,
  color: 'black',
  fontFamily: 'NanumSquareB',
};

export const SubtitleText = {
  fontSize: 18,
  color: 'black',
  fontFamily: 'NanumSquareB',
};


export const ContentText = {
  fontSize: 14,
  color: 'black',
  fontFamily: 'NanumSquareR',
};

export const ContentTextBold = {
  ...ContentText,
  fontFamily: 'NanumSquareB',
};


export const SmallContentText = {
  fontSize: 12,
  color: 'black',
  fontFamily: 'NanumSquareL',
};

export const SmallContentTextBold = {
  ...SmallContentText,
  fontFamily: 'NanumSquareB',
};

export const Shadow = {
  ...Platform.select({
    ios: {
      shadowColor: '#141414',
      shadowOffset: {
        width: 1,
        height: 3
      },
      shadowOpacity: 0.8,

    },
    android: {
      elevation: 16,
    },
  }),
};