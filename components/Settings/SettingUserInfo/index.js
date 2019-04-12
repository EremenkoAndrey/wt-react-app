import React from 'react';
import { connect } from 'react-redux';
import { ImageBackground,Image, View } from 'react-native';
import { Text } from '../../../functional';
import styles from './slyle';


function SettingUserInfo({ user }) {
    const { photo, displayName, email } = user;
    return (
        <View style={styles.block}>
            {photo ? (
                <View style={styles.avatarContainer}>
                    <Image
                        style={styles.avatar}
                        source={{ uri: photo }}
                    />
                </View>
            ) : null}

            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.name}>{displayName}</Text>
                </View>
                <View>
                    <Text style={styles.email}>{email}</Text>
                </View>
            </View>
        </View>
    );
}

const mapStateToProps = (state, ownProps) => ({
    user: state.users[ownProps.userId]
});

export default connect(mapStateToProps)(SettingUserInfo);
