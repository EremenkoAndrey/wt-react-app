import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Text } from '../WTComponents';
import FormatDate from '../FormatDate';
import styles from './slyle';

function ActivityTitle({ userName, userAvatar, date }) {
    return (
        <View style={styles.block}>
            <View style={styles.userCard}>
                {userAvatar ? (
                    <View style={styles.avatarContainer}>
                        <Image
                            style={styles.avatar}
                            source={{ uri: `https://${userAvatar}` }}
                        />
                    </View>
                ) : null}

                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{userName}</Text>
                    <FormatDate style={styles.date} date={date.created} />
                </View>
            </View>
        </View>
    );
}

ActivityTitle.propTypes = {
    userName: PropTypes.string.isRequired,
    date: PropTypes.shape({
        created: PropTypes.string,
        modified: PropTypes.string
    }).isRequired,
    userAvatar: PropTypes.string
};

ActivityTitle.defaultProps = {
    userAvatar: ''
};

const mapStateToProps = (state, ownProps) => ({
    userName: state.users[ownProps.userId].displayName,
    userAvatar: state.users[ownProps.userId].image
});

export default connect(mapStateToProps)(ActivityTitle);
