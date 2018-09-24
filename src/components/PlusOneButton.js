import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-native'

import { increment } from '../store/actions'

export class PlusOneButtonBase extends React.Component {
  render() {
    return <Button onPress={this.props.increment} title="+1" />
  }
}

const mapDispatchToProps = (dispatch: Function) => ({
  increment: () => dispatch(increment()),
})

export const PlusOneButton = connect(
  null,
  mapDispatchToProps,
)(PlusOneButtonBase)
