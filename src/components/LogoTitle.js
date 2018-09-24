import React from 'react'
import { connect } from 'react-redux'
import { Image, View, Text } from 'react-native'

export class LogoTitleBase extends React.Component {
  render() {
    return this.props.title ? (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={require('../assets/spiro.png')}
          style={{ width: 30, height: 30, tintColor: 'red', marginRight: 5 }}
        />
        <Text>{this.props.title}</Text>
      </View>
    ) : (
      <Image
        source={require('../assets/spiro.png')}
        style={{ width: 30, height: 30, tintColor: 'red' }}
      />
    )
  }
}

const mapStateToProps = state => ({
  title: state.basicReducer.title,
})

export const LogoTitle = connect(mapStateToProps)(LogoTitleBase)
