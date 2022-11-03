import React, {Component, useEffect, useRef, useState} from 'react';
import * as Animatable from 'react-native-animatable';

export function ListItem(
  component,
  inAnimation = 'fadeIn',
  outAnimation = 'fadeOut',
  easing = null,
  animation = null,
  duration = 300,
) {
  const [isVisible, setVisible] = useState(true);
  const [isVisibleView, setVisibleView] = useState(true);
  const animatedRef = useRef(null);
  useEffect(() => {
    // this.forceUpdate()
    // this.animatedRef.startAnimation();
  }, []);

  const animationEnded = () => {
    if (!isVisible) {
      setVisibleView(false);
    }
  };

  if (!isVisibleView) {
    return null;
  }

  let animationType = isVisible ? inAnimation : outAnimation;

  if (animation) {
    animationType = animation;
  }

  const durationInt = parseInt(duration, 10);

  return (
    <Animatable.View
      ref={animatedRef}
      easing={easing}
      animation={animationType}
      onAnimationEnd={animationEnded}
      duration={durationInt}>
      {component}
    </Animatable.View>
  );
}
