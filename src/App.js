import React from 'react'
import { createStackNavigator } from 'react-navigation'

import { MainNavScreen } from './navigators/MainNavigator'
import { ModalNavScreen } from './navigators/ModalNavigator'

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainNavScreen,
    },
    MyModal: {
      screen: ModalNavScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'screen',
  },
)

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
