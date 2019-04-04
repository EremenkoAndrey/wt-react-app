import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View } from "native-base";

function Comment({ comment }) {
    return (
        <View>
            <Text>Это комментарий</Text>
        </View>
    );
}

Comment.propTypes = {
    id: PropTypes.string.isRequired
};

Comment.defaultProps = {

};

const mapStateToProps = (state, ownProps) => ({
    comment: state.comments[ownProps.id]
});

export default connect(mapStateToProps)(Comment);