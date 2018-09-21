import React from 'react'
import { Text, View, Image } from 'react-native'

export class RMRScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ focused }) => (
      <Image
        source={require('../assets/spiro.png')}
        style={{ width: 15, height: 15, tintColor: focused ? 'red' : 'coral' }}
      />
    ),
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>RMR!</Text>
      </View>
    )
  }
}
