import { createStackNavigator } from 'react-navigation'

import { PrimeNavigatorScreen } from './PrimeNavigator'
import { ModalNavigator } from './ModalNavigator'

export const MainNavigator = createStackNavigator(
  {
    Main: PrimeNavigatorScreen,
    MyModal: ModalNavigator,
  },
  {
    mode: 'modal',
    headerMode: 'screen',
  },
)
