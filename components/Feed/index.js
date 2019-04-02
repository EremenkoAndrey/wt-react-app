import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text } from 'react-native';
import FeedCard from './../FeedCard';

function Feed({ items }) {
    return (
        <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({item}) => <FeedCard id={item.id} />}
        />
    );
}

Feed.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string
    }))
};

Feed.defaultProps = {
    items: []
};

export default Feed;
