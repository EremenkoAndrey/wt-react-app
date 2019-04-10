import React from 'react';
import { View } from 'react-native';
import { Text } from '../../../functional';
import getTypeByCode from '../../../utils/get-type-by-code';
import styles from './slyle';

export default function ActivityReason({ reason }) {
    const { latestReasonsData } = reason;
    // Код причины - строковое значение ключа в единственном свойстве объекта latestReasonsData
    const reasonCode = Object.keys(latestReasonsData)[0];
    const reasonType = getTypeByCode(reasonCode);

    return (
        <View style={styles.block}>
            <Text style={styles.text}>{`Activity reason: ${reasonType} ${reasonCode}`}</Text>
        </View>
    );
}
