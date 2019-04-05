import React from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';
import styles from './slyle';


export default function ActivityFooter() {
    return (
        <View style={styles.block}>
            <View style={[styles.column, styles.bordered]}><Icon name="ios-thumbs-up" style={{ fontSize: 20 }} /></View>
            <View style={[styles.column, styles.bordered]}><Icon name="ios-thumbs-down" style={{ fontSize: 20 }} /></View>
            <View style={styles.column}><Icon name="ios-share-alt" style={{ fontSize: 20 }} /></View>
        </View>
    );
}
