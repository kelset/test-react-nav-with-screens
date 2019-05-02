import React from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";

import { changeTitle } from "../store/actions";

export class DetailsScreenBase extends React.Component {
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId", "NO-ID");
    const otherParam = navigation.getParam("otherParam", "some default value");

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button title="Go to Details... again" onPress={this._navigateAgain} />
        <Button title="Go to Home" onPress={this._navigateHome} />
        <Button title="Go back" onPress={this._navigateBack} />
        <Button title="Update the title" onPress={this._updateTitle} />
      </View>
    );
  }

  _updateTitle = () => {
    this.props.changeTitle("Updated!");
  };

  _navigateAgain = () => {
    this.props.navigation.push("Details", {
      itemId: Math.floor(Math.random() * 100),
    });
  };

  _navigateHome = () => this.props.navigation.navigate("Home");
  _navigateBack = () => this.props.navigation.goBack();
}

const mapDispatchToProps = (dispatch: Function) => ({
  changeTitle: title => dispatch(changeTitle(title)),
});

export const DetailsScreen = connect(
  null,
  mapDispatchToProps,
)(DetailsScreenBase);
