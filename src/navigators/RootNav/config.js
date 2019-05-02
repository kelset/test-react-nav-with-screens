import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
} from "react-navigation";
import { LoggedNavigator } from "../LoggedNav/config";
import { SignInScreen } from "../../screens/SignInScreen";
import { LoadingScreen } from "../../screens/LoadingScreen";

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const SwitchNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: LoggedNavigator,
    Auth: AuthStack,
  },
  {
    initialRouteName: "Loading",
  },
);

export const RootNavigator = createAppContainer(SwitchNavigator);
