import React from 'react'
import { Image } from 'react-native'

import { createStackNavigator } from 'react-navigation'

import { SettingsScreen } from '../../screens/SettingsScreen'
import { DetailsScreen } from '../../screens/DetailsScreen'

export const SettingsTabNavigator = createStackNavigator(
  {
    Settings: SettingsScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Settings',
    mode: 'card',
  },
)

export class SettingsTabNavigatorScreen extends React.Component {
  static router = SettingsTabNavigator.router

  static navigationOptions = {
    tabBarIcon: ({ focused }) => (
      <Image
        source={require('../../assets/spiro.png')}
        style={{ width: 15, height: 15, tintColor: focused ? 'red' : 'coral' }}
      />
    ),
  }

  render() {
    return <SettingsTabNavigator navigation={this.props.navigation} />
  }
}
