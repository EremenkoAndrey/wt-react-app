import { createStackNavigator, createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DetailPostScreen from '../screens/DetailPostScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import AboutScreen from '../screens/AboutScreen';

const AppStack = createStackNavigator({
    Home: HomeScreen,
    DetailPost: DetailPostScreen
});

const AuthStack = createStackNavigator({
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    About: AboutScreen
}, {
    defaultNavigationOptions: {
        header: null
    }
});

const DrawerWrapAppStack = createDrawerNavigator({
    AppStack: {
        screen: AppStack,
        navigationOptions: {
            title: 'Whotrades'
        }
    }
});

const RootNavigator = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: DrawerWrapAppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: 'AuthLoading'
    }
));

export { RootNavigator };
