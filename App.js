import React, {Component} from 'react';
import { StatusBar, ActivityIndicator, View } from 'react-native';
import { Root } from "native-base";
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import configureStore from './store';
import { RootNavigator } from './navigation/';


const store = configureStore(applyMiddleware(thunk));


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <Provider store={store}>
                <Root>
                    <StatusBar backgroundColor="black" barStyle="light-content" />
                    <RootNavigator />
                </Root>
            </Provider>
        );
    }
}
