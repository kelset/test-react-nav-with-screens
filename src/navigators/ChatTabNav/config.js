import React from "react";
import { Image, StyleSheet } from "react-native";

import { createStackNavigator } from "react-navigation";

import { ChatScreen } from "../../screens/ChatScreen";
import { DetailsScreen } from "../../screens/DetailsScreen";

export const ChatTabNavigator = createStackNavigator(
  {
    Chat: ChatScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: "Chat",
    mode: "card",
  },
);

export class ChatTabNavigatorScreen extends React.Component {
  static router = ChatTabNavigator.router;

  static navigationOptions = {
    tabBarIcon: ({ focused }) => (
      <Image
        source={require("../../assets/spiro.png")}
        style={[styles.tabBarIcon, { tintColor: focused ? "red" : "coral" }]}
      />
    ),
  };

  render() {
    return <ChatTabNavigator navigation={this.props.navigation} />;
  }
}

const styles = StyleSheet.create({
  tabBarIcon: { width: 15, height: 15 },
});
