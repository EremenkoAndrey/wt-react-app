import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text } from "native-base";

function UserCard({ user }) {
    return (
        <Text>{user.displayName}</Text>
    );
}

UserCard.propTypes = {
    id: PropTypes.string.isRequired
};

UserCard.defaultProps = {

};

const mapStateToProps = (state, ownProps) => ({
    user: state.users[ownProps.id]
});

export default connect(mapStateToProps)(UserCard);