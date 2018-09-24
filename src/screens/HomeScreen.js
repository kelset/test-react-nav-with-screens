import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, AsyncStorage } from 'react-native'

class HomeScreenBase extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.value !== nextProps.value) {
      console.log('the value changed even if the screen is sleeping!')
      return true
    }
    return false
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>{`Counter=${this.props.value}`}</Text>

        <Button title="Go to Details" onPress={this._navigateToDetail} />

        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    )
  }

  _navigateToDetail = () => {
    this.props.navigation.navigate('Details', {
      itemId: 86,
      otherParam: 'anything you want here',
    })
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate('Auth')
  }
}

const mapStateToProps = state => ({
  value: state.basicReducer.value,
})

export const HomeScreen = connect(mapStateToProps)(HomeScreenBase)
