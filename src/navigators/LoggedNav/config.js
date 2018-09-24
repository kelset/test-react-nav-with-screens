import React from 'react'
import { Button } from 'react-native'

import { createStackNavigator } from 'react-navigation'

import { TabNavigator } from '../TabNav/config'
import { ModalNavigator } from '../ModalNav/config'

export const LoggedNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
      navigationOptions: {
        header: null,
      },
    },
    MyModal: {
      screen: ModalNavigator,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Button title="Close" onPress={() => navigation.goBack()} />
        ),
      }),
    },
  },
  {
    mode: 'modal',
    navigationOptions: {
      headerMode: 'screen',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      gesturesEnabled: false,
    },
  },
)
