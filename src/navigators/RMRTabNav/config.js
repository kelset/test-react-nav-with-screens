import React from "react";
import { Image } from "react-native";

import { createStackNavigator } from "react-navigation";

import { RMRScreen } from "../../screens/RMRScreen";
import { DetailsScreen } from "../../screens/DetailsScreen";

export const RMRTabNavigator = createStackNavigator(
  {
    RMR: RMRScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: "RMR",
    mode: "card",
  },
);

export class RMRTabNavigatorScreen extends React.Component {
  static router = RMRTabNavigator.router;

  static navigationOptions = {
    tabBarIcon: ({ focused }) => (
      <Image
        source={require("../../assets/spiro.png")}
        style={{ width: 15, height: 15, tintColor: focused ? "red" : "coral" }}
      />
    ),
  };

  render() {
    return <RMRTabNavigator navigation={this.props.navigation} />;
  }
}
