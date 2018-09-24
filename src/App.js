import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { useScreens } from 'react-native-screens'
import logger from 'redux-logger'

import { RootNavigator } from './navigators/RootNav/config'
import { basicReducer } from './store/basicReducer'

const reducer = combineReducers({ basicReducer })
const store = createStore(reducer, applyMiddleware(logger))

useScreens()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  }
}
