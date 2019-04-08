import React from 'react';
import { View } from 'react-native';
import { Text } from '..'
import styles from './style';

export default function Drawer() {
    return (
        <View style={styles.block}>
            <View style={styles.title}>
                <Text  style={styles.titleText}>Whotades</Text>
            </View>
            <Text>Custom drawer</Text>
        </View>
    );
}
