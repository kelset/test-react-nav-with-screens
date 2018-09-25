import React from 'react'
import { View, Text, Button } from 'react-native'

import { LogoTitle } from '../components/LogoTitle'
import { MinusOneButton } from '../components/MinusOneButton'

export class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button onPress={() => navigation.navigate('MyModal')} title="Info" />
      ),
      headerTitle: <LogoTitle />,
      headerRight: <MinusOneButton />,
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Chat Screen</Text>

        <Button
          title="Go to Details from here too"
          onPress={this._navigateToDetail}
        />
      </View>
    )
  }

  _navigateToDetail = () => {
    this.props.navigation.navigate('Details', {
      itemId: 86,
      otherParam: 'Im getting there from Chat',
      hideTabBar: true,
    })
  }
}
