import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from '..';
import styles from './style';

function PreviewPost({ post }) {
    return (
        <View style={styles.block}>
            {post.title ? (
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {post.title}
                    </Text>
                </View>
            ) : null}

            <View style={styles.textContainer}>
                <Text
                    numberOfLines={5}
                    ellipsizeMode="tail"
                >
                    {post.shortContent}
                </Text>
            </View>
        </View>
    );
}

PreviewPost.propTypes = {
    post: PropTypes.shape({
        shortContent: PropTypes.string,
        title: PropTypes.string
    }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
    post: state.posts[ownProps.id]
});

export default connect(mapStateToProps)(PreviewPost);
