import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';
import { Container, Button, Text } from 'native-base';
import token from '../services/token';
import Feed from '../components/Feed';
import { FETCH_USER } from '../actions/user';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Button
                    transparent
                    info
                    onPress={async () => {
                        await token.clear();
                        navigation.navigate('Auth');
                    }}
                >
                    <Text>Logout</Text>
                </Button>
            </View>
        )
    });

    componentDidMount() {
        const { userId, getUser } = this.props;
        if (!userId) {
            getUser();
        }
    }

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
