import React from 'react'
import { Easing, Animated, Image } from 'react-native'

import { createStackNavigator } from 'react-navigation'

import { HomeScreen } from '../../screens/HomeScreen'
import { DetailsScreen } from '../../screens/DetailsScreen'

export const HomeTabNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    mode: 'card',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const width = layout.initWidth
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateX }] }
      },
    }),
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
