import React from 'react'

import { RootNavigator } from './navigators/1-RootNavigator/RootNavigator'
import { useScreens } from 'react-native-screens'

useScreens()

export default class App extends React.Component {
  render() {
    return <RootNavigator />
  }
}
