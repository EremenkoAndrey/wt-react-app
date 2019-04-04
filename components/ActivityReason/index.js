import React from 'react';
import { View } from 'react-native';
import { Text } from '../WTComponents';
import styles from './slyle';

export default function ActivityReason() {
    return (
        <View style={styles.block}>
            <Text style={styles.text}>Activity reason</Text>
        </View>
    );
}
