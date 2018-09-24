import React from 'react'

import { RootNavigator } from './navigators/RootNav/config'
import { useScreens } from 'react-native-screens'

useScreens()

export default class App extends React.Component {
  render() {
    return <RootNavigator />
  }
}
