import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';
import { Container, Button, Text } from 'native-base';
import token from '../services/token';
import Feed from '../components/Feed';
import { FETCH_USER } from '../actions/user';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!!!'
    };

    componentDidMount() {
        const { userId, getUser } = this.props;
        if (!userId) {
            getUser();
        }
    }

    _signOutAsync = async () => {
        const { navigation } = this.props;
        await token.clear();
        navigation.navigate('Auth');
    };

    render() {
        const { userId } = this.props;
        if (!userId) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <Container>
                <Button title="Выйти из приложения" onPress={this._signOutAsync}><Text>Logout</Text></Button>
                <Feed />
            </Container>
        );
    }
}

HomeScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func
    }).isRequired,
    getUser: PropTypes.func.isRequired,
    userId: PropTypes.string
};

HomeScreen.defaultProps = {
    userId: ''
};

const mapStateToProps = state => ({
    userId: state.user.id
});


const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(FETCH_USER())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
