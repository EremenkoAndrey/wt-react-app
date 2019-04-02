import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Text, View} from "native-base";
import UserCard from './../UserCard/';

function Post({ post }) {
    return (
        <View>
            <Text>Это пост</Text>
            <UserCard id={post.author.id} />
        </View>
    );
}

Post.propTypes = {
    id: PropTypes.string.isRequired
};

Post.defaultProps = {

};

const mapStateToProps = (state, ownProps) => ({
    post: state.posts[ownProps.id]
});

export default connect(mapStateToProps)(Post);