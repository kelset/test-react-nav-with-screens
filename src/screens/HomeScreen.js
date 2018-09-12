import React from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native'

import { LogoTitle } from '../components/LogoTitle'

export class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button onPress={() => navigation.navigate('MyModal')} title="Info" />
      ),
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button onPress={navigation.getParam('increaseCount')} title="+1" />
      ),
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount })
  }

  state = {
    count: 0,
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>

        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }}
        />

        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    )
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate('Auth')
  }
}
