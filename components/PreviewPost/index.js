import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import UserCard from '../UserCard';
import WTWebView from '../WTWebView';
import Text from '../WTText';

function PreviewPost({ post }) {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <UserCard id={post.author.id} />
            <Text>Это пост</Text>
            <WTWebView
                originWhitelist={['*']}
                source={{ html: post.content }}
                style={{ flex: 1 }}
            />
        </View>
    );
}

PreviewPost.propTypes = {
    post: PropTypes.shape({
        author: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
    post: state.posts[ownProps.id]
});

export default connect(mapStateToProps)(PreviewPost);
