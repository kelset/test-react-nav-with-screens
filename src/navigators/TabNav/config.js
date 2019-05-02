import React from "react";
import { Button } from "react-native";

import { createBottomTabNavigator } from "react-navigation";

import { HomeTabNavigatorScreen } from "../HomeTabNav/config";
import { SettingsTabNavigatorScreen } from "../SettingsTabNav/config";
import { RMRTabNavigatorScreen } from "../RMRTabNav/config";
import { SpottingTabNavigatorScreen } from "../SpottingTabNav/config";
import { ChatTabNavigatorScreen } from "../ChatTabNav/config";

import { LogoTitle } from "../../components/LogoTitle";
import { PlusOneButton } from "../../components/PlusOneButton";

const screens = {
  Home: HomeTabNavigatorScreen,
  Settings: SettingsTabNavigatorScreen,
  RMR: RMRTabNavigatorScreen,
  Spotting: SpottingTabNavigatorScreen,
  Chat: ChatTabNavigatorScreen,
};

const options = {
  tabBarOptions: {
    activeTintColor: "#e91e63",
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: "blue",
    },
  },
  defaultNavigationOptions: ({ navigation }) => {
    const { routes } = navigation.state;
    let params = routes && routes[1] && routes[1].params;

    return {
      tabBarVisible:
        params && params.hideTabBar != null ? !params.hideTabBar : true,
      swipeEnabled:
        params && params.hideTabBar != null ? !params.hideTabBar : true,
    };
  },
};

export const TabNavigator = createBottomTabNavigator(screens, options);

const HOME_INDEX = 0;

export class TabNavigatorScreen extends React.Component {
  static router = TabNavigator.router;

  static navigationOptions = ({ navigation }) => {
    const isHomeTabFocused = navigation.state.index === HOME_INDEX;
    const isMasterViewFocused = navigation.state.routes[HOME_INDEX].index === 0;

    return {
      header: isHomeTabFocused && isMasterViewFocused ? undefined : null,
      headerLeft: (
        <Button onPress={() => navigation.navigate("MyModal")} title="Info" />
      ),
      headerTitle: <LogoTitle />,
      headerRight: <PlusOneButton />,
    };
  };

  render() {
    return <TabNavigator navigation={this.props.navigation} />;
  }
}
