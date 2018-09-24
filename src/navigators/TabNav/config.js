import React from 'react'
import { Button } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'

import { HomeTabNavigatorScreen } from '../HomeTabNav/config'
import { SettingsScreen } from '../../screens/SettingsScreen'
import { RMRScreen } from '../../screens/RMRScreen'
import { SpottingScreen } from '../../screens/SpottingScreen'
import { ChatScreen } from '../../screens/ChatScreen'

import { LogoTitle } from '../../components/LogoTitle'
import { PlusOneButton } from '../../components/PlusOneButton'

const screens = {
  Home: HomeTabNavigatorScreen,
  Settings: SettingsScreen,
  RMR: RMRScreen,
  Spotting: SpottingScreen,
  Chat: ChatScreen,
}

const options = {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'blue',
    },
  },
}

const TabNavigator = createBottomTabNavigator(screens, options)

export class TabNavigatorScreen extends React.Component {
  static router = TabNavigator.router

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button onPress={() => navigation.navigate('MyModal')} title="Info" />
      ),
      headerTitle: <LogoTitle />,
      headerRight: <PlusOneButton />,
    }
  }

  render() {
    return <TabNavigator navigation={this.props.navigation} />
  }
}
