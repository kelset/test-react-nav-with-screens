import React from 'react'
import { Text, View, Button } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import { HomeTabNavigator } from './HomeTabNavigator'
import { LogoTitle } from '../components/LogoTitle'

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    )
  }
}

export const TabNavigator = createBottomTabNavigator({
  Home: HomeTabNavigator,
  Settings: SettingsScreen,
})

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
