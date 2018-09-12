import { createStackNavigator } from 'react-navigation'

import { PrimeNavigatorScreen } from './PrimeNavigator'
import { ModalNavScreen } from './ModalNavigator'

export const MainNavigator = createStackNavigator(
  {
    Main: {
      screen: PrimeNavigatorScreen,
    },
    MyModal: {
      screen: ModalNavScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'screen',
  },
)
