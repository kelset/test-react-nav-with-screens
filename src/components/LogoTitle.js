import React from "react";
import { connect } from "react-redux";
import { Image, View, Text, StyleSheet } from "react-native";

const SIZE = 30;

export class LogoTitleBase extends React.Component {
  render() {
    return this.props.title ? (
      <View style={styles.imageContainer}>
        <Image source={require("../assets/spiro.png")} style={styles.image} />
        <Text>{this.props.title}</Text>
      </View>
    ) : (
      <Image
        source={require("../assets/spiro.png")}
        style={styles.imageNoTitle}
      />
    );
  }
}

const mapStateToProps = state => ({
  title: state.basicReducer.title,
});

const styles = StyleSheet.create({
  imageContainer: { flexDirection: "row", alignItems: "center" },
  image: {
    width: SIZE,
    height: SIZE,
    tintColor: "red",
    marginRight: 5,
  },
  imageNoTitle: {
    width: SIZE,
    height: SIZE,
    tintColor: "red",
  },
});

export const LogoTitle = connect(mapStateToProps)(LogoTitleBase);
