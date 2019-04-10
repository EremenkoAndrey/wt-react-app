import React from 'react';
import { View } from 'react-native';
import { Text, Dict } from '../../../functional';
import getTypeByCode from '../../../services/get-type-by-code';
import styles from './slyle';

export default function ActivityReason({ reason }) {
    const { latestReasonsData } = reason;
    // Код причины - строковое значение ключа в единственном свойстве объекта latestReasonsData
    const reasonCode = Object.keys(latestReasonsData)[0];
    const reasonType = getTypeByCode(reasonCode);
console.log('reasonType', reasonType)

    return (
        <View style={styles.block}>
            <Dict style={styles.text} code={reasonType} />
        </View>
    );
}
