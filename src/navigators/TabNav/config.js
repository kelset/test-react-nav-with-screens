import React from 'react'
import { Button } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import { HomeTabNavigatorScreen } from '../HomeTabNav/config'
import { LogoTitle } from '../../components/LogoTitle'
import { SettingsScreen } from '../../screens/SettingsScreen'
import { RMRScreen } from '../../screens/RMRScreen'
import { SpottingScreen } from '../../screens/SpottingScreen'
import { ChatScreen } from '../../screens/ChatScreen'

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

export const TabNavigator = createBottomTabNavigator(screens, options)

export class TabNavigatorScreen extends React.Component {
  static router = TabNavigator.router

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button onPress={() => navigation.navigate('MyModal')} title="Info" />
      ),
      // and the title should react to this too
      headerTitle: <LogoTitle />,
      // TODO: have this as redux
      // headerRight: (
      //   <Button onPress={navigation.getParam('increaseCount')} title="+1" />
      // ),
    }
  }

  render() {
    return <TabNavigator navigation={this.props.navigation} />
  }
}
