import React from 'react'
import { createFluidNavigator } from 'react-navigation-fluid-transitions'

import { Screen1, Screen2, Screen3 } from '../screens/ModalScreen'

export const ModalNavigator = createFluidNavigator(
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

export class ModalNavScreen extends React.Component {
  static router = ModalNavigator.router

  render() {
    return <ModalNavigator navigation={this.props.navigation} />
  }
}
