import { createBottomTabNavigator } from 'react-navigation'

import { HomeTabNavigatorScreen } from '../HomeTabNav/config'
import { SettingsScreen } from '../../screens/SettingsScreen'
import { RMRScreen } from '../../screens/RMRScreen'
import { SpottingTabNavigatorScreen } from '../SpottingTabNav/config'
import { ChatScreen } from '../../screens/ChatScreen'

const screens = {
  Home: HomeTabNavigatorScreen,
  Settings: SettingsScreen,
  RMR: RMRScreen,
  Spotting: SpottingTabNavigatorScreen,
  Chat: ChatScreen,
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
