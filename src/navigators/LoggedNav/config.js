import { createStackNavigator } from 'react-navigation'

import { TabNavigatorScreen } from '../TabNav/config'
import { ModalNavigator } from '../ModalNav/config'

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
