import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './../screens/HomeScreen';
import SignInScreen from './../screens/SignInScreen';
import SignUpScreen from './../screens/SignUpScreen';
import AuthLoadingScreen from './../screens/AuthLoadingScreen';

const AppStack = createStackNavigator({
    Home: HomeScreen
});
const AuthStack = createStackNavigator({
    SignIn: SignInScreen,
    SignUp: SignUpScreen
});

const RootNavigator = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));

export { RootNavigator };
