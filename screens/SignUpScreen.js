import React from 'react';
import { View } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import Link from "./../components/Link";

export default class SignUpScreen extends React.Component {
    static navigationOptions = {
        title: 'WhoTrades Sign Up',
    };

    constructor() {
        super();
        this.loading = false;
        this.state = {
            error: false,
            username: '',
            password: '',
            email: ''
        }
    }

    _signUpAsync = async () => {
        // register implementation
    };

    _showSignInScreen = () => {
        this.props.navigation.navigate('SignIn')
    };

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input
                                onChangeText={email => this.setState({ email })}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input
                                onChangeText={username => this.setState({ username })}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input
                                onChangeText={password => this.setState({ password })}
                            />
                        </Item>
                    </Form>

                    <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                        <Text style={{ textAlign: 'center' }}>
                            by sign up you agree to our
                            <Link to={'https://whotrades.com/terms'}> terms and conditions </Link>
                            and
                            <Link to={'https://whotrades.com/privacy-policy'}> privacy policy</Link>
                        </Text>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Button
                            onPress={this._signUpAsync}
                            block
                        >
                            <Text>Sign up</Text>
                        </Button>
                    </View>

                    <View style={{ marginTop: 25, flex: 1, alignItems: 'center' }}>
                        <View>
                            <Button
                                onPress={this._showSignInScreen}
                                transparent
                            >
                                <Text>Sign in</Text>
                            </Button>
                        </View>
                        <View>
                            <Button
                                onPress={this._signInAsync}
                                transparent
                            >
                                <Text>About us</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}
