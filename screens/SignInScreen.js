import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Form, Item, Input, Label, Button, Text, Toast } from 'native-base';
import api from './../services/api';
import token from './../services/token';
import Link from "./../components/Link";
import About from "./../components/About";
import { SHOW_ABOUT } from './../actions/app';


class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'WhoTrades',
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

    render() {
        const { showAbout } = this.props;
        return (
            <Container>
                <Content>
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

                    <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                        <Text style={{ textAlign: 'center' }}>
                            by sign in you agree to our
                            <Link to={'https://whotrades.com/terms'}> terms and conditions </Link>
                            and
                            <Link to={'https://whotrades.com/privacy-policy'}> privacy policy</Link>
                        </Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Button
                            onPress={this._signInAsync}
                            block
                        >
                            <Text>Sign in</Text>
                        </Button>
                    </View>

                    <View style={{ marginTop: 25, flex: 1, alignItems: 'center' }}>
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
                                onPress={showAbout}
                                transparent
                            >
                                <Text>About us</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
                <About />
            </Container>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    showAbout: () => dispatch(SHOW_ABOUT())
});

export default connect(null, mapDispatchToProps)(SignInScreen);
