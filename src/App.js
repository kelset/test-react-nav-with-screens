import React from 'react'
import { createStackNavigator } from 'react-navigation'

import { HomeScreen } from './screens/HomeScreen'
import { DetailsScreen } from './screens/DetailsScreen'
import { ModalScreen } from './screens/ModalScreen'

const MainStack = createStackNavigator(
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
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
)

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
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
