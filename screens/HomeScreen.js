import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';
import { Container, Content, Button } from 'native-base';
import token from './../services/token';
import Feed from './../components/Feed';
import { GET_INIT_FEED_DATA } from "../actions/feed";


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    componentDidMount() {
        const { feedList, getInitFeedData } = this.props;
        if (!feedList.length) {
            getInitFeedData()
        }
    }

    render() {
        const { feedList, userId } = this.props;
        if (!userId) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <Container>
                <Content>
                    <Button title="Выйти из приложения" onPress={this._signOutAsync} />
                    <Feed items={feedList} />
                </Content>
            </Container>
        );
    }


    _signOutAsync = async () => {
        await token.clear();
        this.props.navigation.navigate('Auth');
    };
}

const mapStateToProps = state => ({
    feedList: state.feed.list,
    userId: state.user.id
});


const mapDispatchToProps = dispatch => ({
    getInitFeedData: () => dispatch(GET_INIT_FEED_DATA())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);