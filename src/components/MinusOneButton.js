import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-native'

import { decrement } from '../store/actions'

export class MinusOneButtonBase extends React.Component {
  render() {
    return <Button onPress={this.props.decrement} title="-1" />
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  decrement: () => dispatch(decrement()),
})

export const MinusOneButton = connect(
  null,
  mapDispatchToProps,
)(MinusOneButtonBase)
