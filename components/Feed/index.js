import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, ActivityIndicator, View } from 'react-native';
import Activity from '../Activity';
import { FETCH_FEED } from '../../actions/feed';

const Spinner = connect(state => ({
    loading: state.feed.loading
}))(({ loading }) => (loading ? <ActivityIndicator /> : null));

class Feed extends React.Component {
    componentDidMount() {
        const { feedList, getInitFeedData } = this.props;
        if (!feedList.length) {
            getInitFeedData();
        }
    }

    render() {
        const { feedList, getInitFeedData } = this.props;
        const viewStyles = feedList.length ? { flex: 1, alignItems: 'center', justifyContent: 'center' } : {};

        return (
            <View style={viewStyles}>
                {feedList.length ? (
                    <FlatList
                        data={feedList}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <Activity id={item.id} />}
                        onEndReached={getInitFeedData}
                        onEndReachedThreshold={1}
                    />
                ) : null}
                <Spinner />
            </View>
        );
    }
}

Feed.propTypes = {
    feedList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string
    })).isRequired,
    getInitFeedData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    feedList: state.feed.list
});


const mapDispatchToProps = dispatch => ({
    getInitFeedData: () => dispatch(FETCH_FEED())
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
