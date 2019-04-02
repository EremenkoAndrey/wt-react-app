import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Text, View } from "native-base";

function UserCard({ user }) {
    return (
        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20}}>
            {user.image ? (
                <Image
                    style={{width: 40, height: 40, marginRight: 10}}
                    source={{uri: `https://${user.image}` }}
                />
            ) : null}

            <Text>{user.displayName}</Text>
        </View>
    );
}

UserCard.propTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.shape({
        image: PropTypes.string
    }).isRequired
};

UserCard.defaultProps = {

};

const mapStateToProps = (state, ownProps) => ({
    user: state.users[ownProps.id]
});

export default connect(mapStateToProps)(UserCard);