import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import { MainNavigator } from '../MainNavigator'
import { SignInScreen } from './SignInScreen'
import { LoadingScreen } from './LoadingScreen'

const AuthStack = createStackNavigator({ SignIn: SignInScreen })

export const RootNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: MainNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Loading',
  },
)
