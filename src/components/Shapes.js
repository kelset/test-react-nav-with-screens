import React from "react";
import { View, StyleSheet } from "react-native";

export const Circle = props => (
  <View
    style={[
      styles.circle,
      {
        backgroundColor: props.background,
        width: props.size,
        height: props.size,
        borderRadius: props.size / 2,
      },
    ]}
  />
);

export const Shape = props => (
  <View
    style={{
      backgroundColor: props.background || "#EE0000",
      width: props.size,
      height: props.size,
      borderRadius: props.borderRadius || 0,
    }}
  />
);

const styles = StyleSheet.create({
  circle: { justifyContent: "center", alignItems: "center" },
});
