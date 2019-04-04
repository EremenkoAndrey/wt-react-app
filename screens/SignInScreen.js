import React from 'react';
import { View } from 'react-native';
import {
    Container, Content, Form, Item, Input, Label, Button, Text, Toast
} from 'native-base';
import api from '../services/api';
import token from '../services/token';
import Link from '../components/Link';


export default class SignInScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.loading = false;
        this.state = {
            error: false,
            username: 'ae@whotrades.org',
            password: ''
        }
    }

    _showToast = () => {
        Toast.show({
            text: "Wrong password!",
            buttonText: "Okay",
            duration: 0,
            type: "danger"
        })
    };

    _setError = () => {
        this.setState({
            error: true
        });
        this._showToast();
    };

    _signInAsync = async () => {
        if (this.loading || !this.state.username || !this.state.password) {
            return false;
        }
        this.loading = true;
        const { username, password } = this.state;

        try {
            const result = await api.authorization(username, password);
            const { token: userToken } = result;
            await token.save(userToken);
            this.props.navigation.navigate('App');
        } catch (error) {
            this._setError();
            this.loading = false;
        }
    };

    _showSignUpScreen = () => {
        this.props.navigation.navigate('SignUp')
    };

    _showAbout = () => {
        this.props.navigation.navigate('About', { transition: 'vertical' })
    };

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch' }}>
                <View>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input
                                value={this.state.username}
                                onChangeText={username => this.setState({ username })}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                                secureTextEntry
                            />
                        </Item>
                    </Form>
                </View>

                <View style={{ paddingTop: 20, paddingLeft: 10, paddingRight: 10 }}>
                    <Text style={{ textAlign: 'center' }}>
                        by sign in you agree to our
                        <Link to={'https://whotrades.com/terms'}> terms and conditions </Link>
                        and
                        <Link to={'https://whotrades.com/privacy-policy'}> privacy policy</Link>
                    </Text>
                </View>

                <View style={{ paddingTop: 20 }}>
                    <Button
                        onPress={this._signInAsync}
                        block
                    >
                        <Text>Sign in</Text>
                    </Button>
                </View>

                <View style={{ paddingTop: 25, alignItems: 'center' }}>
                    <View>
                        <Button
                            onPress={this._showSignUpScreen}
                            transparent
                        >
                            <Text>Sign up</Text>
                        </Button>
                    </View>
                    <View>
                        <Button
                            onPress={this._showAbout}
                            transparent
                        >
                            <Text>About us</Text>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}
