import { StackNavigator } from 'react-navigation';

//Screens
import SplashScreen from '@src/screens/SplashScreen';
import Login from '@src/screens/Login';
import Main from '@src/screens/main/Main';
import NewPost from '@src/screens/NewPost';

const RouteConfigs = {
  SplashScreen: { screen: SplashScreen },
  Login: { screen: Login },
  Main: { screen: Main },
  NewPost: { screen: NewPost }
};

const StackNavigatorConfig = {
	navigationOptions: { header: null }
};


//Router
const Router = StackNavigator(RouteConfigs, StackNavigatorConfig);

export default Router;