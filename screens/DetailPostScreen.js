import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { WebView } from 'react-native';
import { window } from '../constants/Layout';

class DetailPostScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('title'),
        headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'normal'
        }
    });

    render() {
        const { navigation } = this.props;
        const html = navigation.getParam('html');
        return (
            <WebView
                originWhitelist={['*']}
                source={{ html }}
                style={{
                    width: window.width,
                    height: window.height
                }}
            />
        );
    }
}

DetailPostScreen.propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func
    }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
    post: state.posts[ownProps.id]
});

export default connect(mapStateToProps)(DetailPostScreen);
