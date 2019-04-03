import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import Activity from '../Activity';

function Feed({ items }) {
    return (
        <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Activity id={item.id} />}
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
