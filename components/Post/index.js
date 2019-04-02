import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Text, View} from "native-base";
import UserCard from './../UserCard/';

function Post({ post }) {
    return (
        <View>
            <UserCard id={post.author.id} />
            <Text>Это пост</Text>
        </View>
    );
}

Post.propTypes = {
    id: PropTypes.string.isRequired,
    post: PropTypes.shape({
        author: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired
};

Post.defaultProps = {

};

const mapStateToProps = (state, ownProps) => ({
    post: state.posts[ownProps.id]
});

export default connect(mapStateToProps)(Post);