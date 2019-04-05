import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import HTMLView from 'react-native-htmlview';
import Tool from '../Tool';
import { Text } from '..';
import styles from './style';

function PreviewPost({ post }) {
    return (
        <View style={styles.block}>
            {Array.isArray(post.instruments)
                ? (
                    <View style={styles.instruments}>
                        {post.instruments.map(tool => (
                            <View style={styles.instrument} key={tool.id}>
                                <Tool id={tool.id} fontSize={13} />
                            </View>
                        ))}
                    </View>
                )
                : null}

            {post.title ? (
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {post.title}
                    </Text>
                </View>
            ) : null}

            <View>
                <HTMLView
                    value={post.shortContent}
                    RootComponent={element => (<Text {...element} />)}
                />
            </View>
        </View>
    );
}

PreviewPost.propTypes = {
    post: PropTypes.shape({
        instruments: PropTypes.oneOfType([
            PropTypes.shape({
                type: null
            }),
            PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string
            }))
        ]).isRequired,
        shortContent: PropTypes.string.isRequired,
        title: PropTypes.string
    }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
    post: state.posts[ownProps.id]
});

export default connect(mapStateToProps)(PreviewPost);
