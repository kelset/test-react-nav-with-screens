import { createStackNavigator } from 'react-navigation'

import { TabNavigator } from '../TabNav/config'
import { ModalNavigator } from '../ModalNav/config'

export const LoggedNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator,
      navigationOptions: {
        header: null,
      },
    },
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
