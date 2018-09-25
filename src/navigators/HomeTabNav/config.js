import React from 'react'
import { Image } from 'react-native'
import { createFluidNavigator } from 'react-navigation-fluid-transitions'

import { ImageListScreen } from '../../screens/ImageListScreen'
import { ImageDetailsScreen } from '../../screens/ImageDetailsScreen'

export const HomeTabNavigator = createFluidNavigator(
  {
    imageList: { screen: ImageListScreen },
    imageDetails: { screen: ImageDetailsScreen },
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
