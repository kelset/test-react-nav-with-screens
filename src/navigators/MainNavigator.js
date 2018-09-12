import { createStackNavigator } from 'react-navigation'

import { TabNavigatorScreen } from './TabNavigator'
import { ModalNavigator } from './ModalNavigator'

export const MainNavigator = createStackNavigator(
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
