import {useEffect, useState, ReactElement} from 'react';
import {View,Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppIntroSliderProps} from './index.type';
const windowWidth = Dimensions.get('window').width;
var __importStar =
  (this && __importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result['default'] = mod;
    return result;
  };
var __importDefault =
  (this && __importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
const React = __importStar(require('react'));
const react_native_1 = require('react-native');
const merge_extradata_1 = __importDefault(require('./merge-extradata'));
const isAndroidRTL = react_native_1.I18nManager.isRTL && react_native_1.Platform.OS === 'android';
export  const AppIntroSlider = ({
  flatList,
  onSlideChange,
  bottomButton=false,
  showNextButton=true,
  renderNextButton,
  renderPrevButton,
  showPrevButton=false,
  showDoneButton=true,
  renderDoneButton,
  containerStyle,
  dotClickEnabled,
  showSkipButton=false,
  onDone,
  renderSkipButton,
  onSkip,
  extraData,
  data,
  prevLabel="Back",
  nextLabel="Next",
  goNextIndex,
  renderItem,
  skipLabel='Skip',
  doneLabel='Done',
  activeDotStyle={
    backgroundColor: 'rgba(255, 255, 255, .9)',
},
  keyboardOpen=false,
  renderPagination,
  dotStyle={
    backgroundColor: 'rgba(0, 0, 0, .2)',
}
}: AppIntroSliderProps): ReactElement => {
  
  useEffect(()=>{
    goToSlide(goNextIndex, true)
  },[goNextIndex])
  const [width, setWidth] = useState(windowWidth);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  
  console.log("pageNum",skipLabel);
  const goToSlide = (pageNum, triggerOnSlideChange) => {
   
    console.log("goToSlide",triggerOnSlideChange);
    const prevNum = activeIndex;
    setActiveIndex(pageNum);
    flatList?.scrollToOffset({
      offset: _rtlSafeIndex(pageNum) * width,
    });
    if (triggerOnSlideChange && onSlideChange) {
      onSlideChange(pageNum, prevNum);
    }
  };
  // Get the list ref
  const getListRef = () => flatList;
  const _rtlSafeIndex = i => (isAndroidRTL ? data.length - 1 - i : i);
  // Render a slide
 
  const _renderButton = (name, label, onPress, render) => {
    const content = render ? render() : _renderDefaultButton(name, label);
    return _renderOuterButton(content, name, onPress);
  };
  const _renderDefaultButton = (name, label) => {
    let content = (
      <react_native_1.Text style={styles.buttonText}>
        {label}
      </react_native_1.Text>
    );
    if (bottomButton) {
      content = (
        <react_native_1.View
          style={[
            name === 'Skip' || name === 'Prev'
              ? styles.transparentBottomButton
              : styles.bottomButton,
          ]}>
          {content}
        </react_native_1.View>
      );
    }
    return content;
  };
  const _renderOuterButton = (content, name, onPress) => {
    const style =
      name === 'Skip' || name === 'Prev'
        ? styles.leftButtonContainer
        : styles.rightButtonContainer;
    return (
      <react_native_1.View style={!bottomButton && style}>
        <react_native_1.TouchableOpacity
          onPress={onPress}
          style={bottomButton && styles.flexOne}>
          {content}
        </react_native_1.TouchableOpacity>
      </react_native_1.View>
    );
  };
  const  _renderNextButton = () =>
    showNextButton &&
    _renderButton(
      'Next',
      nextLabel,
      () => goToSlide(activeIndex + 1, true),
      renderNextButton,
    );
    const _renderPrevButton = () =>
    showPrevButton &&
    _renderButton(
      'Prev',
      prevLabel,
      () => goToSlide(activeIndex - 1, true),
      renderPrevButton,
    );
    const _renderDoneButton = () =>
    showDoneButton &&
    _renderButton(
      'Done',
      doneLabel,
      onDone,
      renderDoneButton,
    );
    const _renderSkipButton = () =>
    // scrollToEnd does not work in RTL so use goToSlide instead
    showSkipButton &&
    _renderButton(
      'Skip',
      skipLabel,
      () =>
        onSkip ? onSkip() : goToSlide(data.length - 1),
      renderSkipButton,
    );
    const _renderPagination = () => {
    const isLastSlide = activeIndex === data.length - 1;
    const isFirstSlide = activeIndex === 0;
    const secondaryButton =
      (!isFirstSlide && _renderPrevButton()) ||
      (!isLastSlide && _renderSkipButton());
    const primaryButton = isLastSlide
      ? _renderDoneButton()
      : _renderNextButton();
    return (
      <react_native_1.View style={styles.paginationContainer}>
        <react_native_1.SafeAreaView>
          <react_native_1.View style={styles.paginationDots}>
            {data.length > 1 &&
              data.map((_, i) =>
                dotClickEnabled ? (
                  <react_native_1.TouchableOpacity
                    key={i}
                    style={[
                      styles.dot,
                      _rtlSafeIndex(i) === activeIndex
                        ? activeDotStyle
                        : dotStyle,
                    ]}
                    onPress={() => goToSlide(i, true)}
                  />
                ) : (
                  <react_native_1.View
                    key={i}
                    style={[
                      styles.dot,
                      _rtlSafeIndex(i) === activeIndex
                        ? activeDotStyle
                        : dotStyle,
                    ]}
                  />
                ),
              )}
          </react_native_1.View>
          {primaryButton}
          {secondaryButton}
        </react_native_1.SafeAreaView>
      </react_native_1.View>
    );
  };
  const _onMomentumScrollEnd = e => {
    const offset = e.nativeEvent.contentOffset.x;
    // Touching very very quickly and continuous brings about
    // a variation close to - but not quite - the width.
    // That's why we round the number.
    // Also, Android phones and their weird numbers
    const newIndex = _rtlSafeIndex(Math.round(offset / width));
    if (newIndex === activeIndex) {
      // No page change, don't do anything
      return;
    }
    console.log("===>",width);
    
    const lastIndex = activeIndex;
    setActiveIndex(newIndex);
    onSlideChange && onSlideChange(newIndex, lastIndex);
  };
  const _onLayout = ({nativeEvent}) => {
    const {width, height} = nativeEvent.layout;
    if (width !== width || height !== height) {
      // Set new width to update rendering of pages
      setWidth(width);
      setHeight(height);
      // Set new scroll position
      const func = () => {
        flatList?.scrollToOffset({
          offset: _rtlSafeIndex(activeIndex) * width,
          animated: false,
        });
      };
      setTimeout(func, 0); // Must be called like this to avoid bugs :/
    }
  };
  const _renderItem = flatListArgs => {
    console.log("flatListArgs",flatListArgs);
    

    return (
      <react_native_1.View style={{width:`100%`,height:`100%`, flex: 1}}>
        {renderItem(flatListArgs)}
        
      </react_native_1.View>
    );
  };
  const extra = merge_extradata_1.default(extraData, width);

  return (
    <View style={[{height: `100%`},containerStyle]}>
      <react_native_1.View style={styles.flexOne}>
        <react_native_1.FlatList
          ref={ref => (flatList = ref)}
          data={data}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          style={styles.flatList}
          renderItem={(t)=> _renderItem(t)}
          onMomentumScrollEnd={_onMomentumScrollEnd}
          extraData={extra}
          onLayout={_onLayout}
          initialNumToRender={1}
        />
        {!keyboardOpen ? (
          <View style={{position:"absolute",height:50,width:`100%`,bottom:0}}>
             {renderPagination
            ? renderPagination(activeIndex)
            : _renderPagination()}
          </View>
        ) : null}
      </react_native_1.View>
    </View>
  );
};

const styles = react_native_1.StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  flatList: {
    flex: 1,

    flexDirection: isAndroidRTL ? 'row-reverse' : 'row',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    justifyContent: 'center',
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: isAndroidRTL ? 'row-reverse' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  leftButtonContainer: {
    position: 'absolute',
    left: 0,
  },
  rightButtonContainer: {
    position: 'absolute',
    right: 0,
  },
  bottomButton: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transparentBottomButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    padding: 12,
  },
});
