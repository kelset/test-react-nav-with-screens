import React from 'react'
import { createStackNavigator } from 'react-navigation'

import { MainNavigator } from './navigators/MainNavigator'
import { ModalNavigator } from './navigators/ModalNavigator'

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainNavigator,
    },
    MyModal: {
      screen: ModalNavigator,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
)

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
