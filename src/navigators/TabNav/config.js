import { createBottomTabNavigator } from 'react-navigation'

import { HomeTabNavigatorScreen } from '../HomeTabNav/config'
import { SettingsTabNavigatorScreen } from '../SettingsTabNav/config'
import { RMRTabNavigatorScreen } from '../RMRTabNav/config'
import { SpottingTabNavigatorScreen } from '../SpottingTabNav/config'
import { ChatTabNavigatorScreen } from '../ChatTabNav/config'

const screens = {
  Home: HomeTabNavigatorScreen,
  Settings: SettingsTabNavigatorScreen,
  RMR: RMRTabNavigatorScreen,
  Spotting: SpottingTabNavigatorScreen,
  Chat: ChatTabNavigatorScreen,
}

const options = {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'blue',
    },
  },
  navigationOptions: ({ navigation }) => {
    const { routes } = navigation.state
    let params = routes && routes[1] && routes[1].params

    return {
      tabBarVisible:
        params && params.hideTabBar != null ? !params.hideTabBar : true,
      swipeEnabled:
        params && params.hideTabBar != null ? !params.hideTabBar : true,
    }
  },
}

export const TabNavigator = createBottomTabNavigator(screens, options)
