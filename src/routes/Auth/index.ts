import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import {
  Login,
} from '../../components/pages';

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
