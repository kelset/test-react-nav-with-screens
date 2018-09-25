import React from 'react'
import { Image } from 'react-native'
import { createFluidNavigator } from 'react-navigation-fluid-transitions'

import { Screen1, Screen2, Screen3 } from '../../screens/ModalScreen'

export const HomeTabNavigator = createFluidNavigator(
  {
    screen1: { screen: Screen1 },
    screen2: { screen: Screen2 },
    screen3: { screen: Screen3 },
  },
  {
    navigationOptions: {
      gesturesEnabled: true,
    },
  },
)

export class HomeTabNavigatorScreen extends React.Component {
  static router = HomeTabNavigator.router

  static navigationOptions = {
    tabBarIcon: ({ focused }) => (
      <Image
        source={require('../../assets/spiro.png')}
        style={{ width: 15, height: 15, tintColor: focused ? 'red' : 'coral' }}
      />
    ),
  }

  render() {
    return <HomeTabNavigator navigation={this.props.navigation} />
  }
}
