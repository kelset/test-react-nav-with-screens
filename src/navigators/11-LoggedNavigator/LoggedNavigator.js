import { createStackNavigator } from 'react-navigation'

import { TabNavigatorScreen } from '../111-TabNavigator/TabNavigator'
import { ModalNavigator } from '../112-ModalNavigator/ModalNavigator'

export const LoggedNavigator = createStackNavigator(
  {
    Main: TabNavigatorScreen,
    MyModal: ModalNavigator,
  },
  {
    mode: 'modal',
    navigationOptions: {
      headerMode: 'screen',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      gesturesEnabled: false,
    },
  },
)
