import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import { LoggedNavigator } from '../11-LoggedNavigator/LoggedNavigator'
import { SignInScreen } from './screens/SignInScreen'
import { LoadingScreen } from './screens/LoadingScreen'

const AuthStack = createStackNavigator({ SignIn: SignInScreen })

export const RootNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: LoggedNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Loading',
  },
)
