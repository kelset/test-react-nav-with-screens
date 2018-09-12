import React from 'react'
import { View, Text, Button } from 'react-native'

export class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props
    const itemId = navigation.getParam('itemId', 'NO-ID')
    const otherParam = navigation.getParam('otherParam', 'some default value')

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button title="Go to Details... again" onPress={this._navigateAgain} />
        <Button title="Go to Home" onPress={this._navigateHome} />
        <Button title="Go back" onPress={this._navigateBack} />
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: 'Updated!' })
          }
        />
      </View>
    )
  }

  _updateTitle = () => {
    this.props.navigation.setParams({ otherParam: 'Updated!' })
  }

  _navigateAgain = () => {
    this.props.navigation.push('Details', {
      itemId: Math.floor(Math.random() * 100),
    })
  }

  _navigateHome = () => this.props.navigation.navigate('Home')
  _navigateBack = () => this.props.navigation.goBack()
}
