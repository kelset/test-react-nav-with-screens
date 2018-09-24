import { createBottomTabNavigator } from 'react-navigation'

import { HomeTabNavigatorScreen } from '../HomeTabNav/config'
import { SettingsScreen } from '../../screens/SettingsScreen'
import { RMRScreen } from '../../screens/RMRScreen'
import { SpottingScreen } from '../../screens/SpottingScreen'
import { ChatScreen } from '../../screens/ChatScreen'

const screens = {
  Home: HomeTabNavigatorScreen,
  Settings: SettingsScreen,
  RMR: RMRScreen,
  Spotting: SpottingScreen,
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
}

export const TabNavigator = createBottomTabNavigator(screens, options)
