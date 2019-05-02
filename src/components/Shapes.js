import React from "react";
import { View } from "react-native";

export const Circle = props => (
  <View
    style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: props.background,
      width: props.size,
      height: props.size,
      borderRadius: props.size / 2,
    }}
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
