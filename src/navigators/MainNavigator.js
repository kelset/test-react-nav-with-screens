import React from 'react'
import { Easing, Animated } from 'react-native'

import { createStackNavigator } from 'react-navigation'

import { HomeScreen } from '../screens/HomeScreen'
import { DetailsScreen } from '../screens/DetailsScreen'

export const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    mode: 'card',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerMode: 'screen',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      gesturesEnabled: false,
    },
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

export class MainNavScreen extends React.Component {
  static router = MainNavigator.router

  static navigationOptions = { header: null }

  render() {
    return <MainNavigator navigation={this.props.navigation} />
  }
}
