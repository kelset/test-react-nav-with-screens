import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import { MainNavigator } from './MainNavigator'
import { SignInScreen } from '../screens/SignInScreen'
import { LoadingScreen } from '../screens/LoadingScreen'

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

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
