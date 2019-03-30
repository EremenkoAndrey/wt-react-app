import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text } from 'react-native';

function Feed({ items }) {
    return (
        <FlatList
            data={items}
            renderItem={({item}) => <Text>{item.id}</Text>}
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
