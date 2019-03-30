import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import token from './../services/token';


export default class AuthLoadingScreen extends React.Component {
    componentDidMount(){
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await token.get();
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator />
            </View>
        );
    }
}