import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const CustomTouchable = ({
  onPress,
  children,
  rippleColor,
  containerStyle,
}) => {
  const [rippleScale] = useState(new Animated.Value(0));

  const startRippleAnimation = () => {
    Animated.timing(rippleScale, {
      toValue: 5,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => rippleScale.setValue(0));
  };

  const interpolateColor = rippleScale.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(0, 0, 0, 0)', rippleColor], // Replace with your desired color
  });

  const handlePress = () => {
    startRippleAnimation();
    onPress && onPress();
  };

  const renderRipple = () => {
    const rippleSize = rippleScale.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100],
    });

    return (
      <Animated.View
        style={{
          position: "absolute",
          backgroundColor: rippleColor,
          borderRadius: 50,
          transform: [{ scale: rippleScale }],
          width: rippleSize,
          height: rippleSize,
        }}
      />
    );
  };
  return <TouchableWithoutFeedback onPress={handlePress}>
    <View style={[{ overflow: "hidden" }, containerStyle]}>
      {children}
      {renderRipple()}
    </View>
  </TouchableWithoutFeedback>;
};

export default CustomTouchable;
