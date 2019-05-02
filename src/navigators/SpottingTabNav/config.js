import React from "react";
import { Image } from "react-native";

import { createStackNavigator } from "react-navigation";

import { SpottingScreen } from "../../screens/SpottingScreen";
import { DetailsScreen } from "../../screens/DetailsScreen";

export const SpottingTabNavigator = createStackNavigator(
  {
    Spotting: SpottingScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: "Spotting",
    mode: "card",
  },
);

export class SpottingTabNavigatorScreen extends React.Component {
  static router = SpottingTabNavigator.router;

  static navigationOptions = {
    tabBarIcon: ({ focused }) => (
      <Image
        source={require("../../assets/spiro.png")}
        style={{ width: 15, height: 15, tintColor: focused ? "red" : "coral" }}
      />
    ),
  };

  render() {
    return <SpottingTabNavigator navigation={this.props.navigation} />;
  }
}
