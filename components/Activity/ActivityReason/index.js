import React from 'react';
import { View, Text } from 'react-native';
import { Dict, Date, UserLink } from '../../../functional';
import getTypeByCode from '../../../services/get-type-by-code';
import styles from './slyle';

const buildText = (reasonId, key, date, userId) => {
    switch (reasonId) {
    case '1':
        return (
            <Text>
                {key ? <Dict style={styles.text} code={key} spaceAfter /> : null}
                {userId ? <UserLink style={[styles.text, styles.link]} id={userId} /> : null}
            </Text>
        );
    case '11':
        return (
            <Text>
                {userId ? <UserLink style={[styles.text, styles.link]} id={userId} /> : null}
                {date ? <Date style={styles.text} spaceBefore spaceAfter>{date}</Date> : null}
                {key ? <Dict style={styles.text} code={key} /> : null}
            </Text>
        );
    default:
        return (
            <Text>
                {key ? <Dict style={styles.text} code={key} /> : null}
                {date ? <Date style={styles.text} spaceBefore spaceAfter>{date}</Date> : null}
            </Text>
        );
    }
};

/**
 * @return {null}
 */
export default function ActivityReason({ reasonData, userGenerator }) {
    // Код причины - строковое значение ключа в единственном свойстве объекта latestReasonsData
    const reasonId = reasonData.code;
    if (!reasonId) {
        return null;
    }
    const reasonKey = getTypeByCode(reasonId);
    const date = reasonData[reasonId].date || '';

    return (
        <View style={styles.block}>
            {buildText(reasonId, reasonKey, date, userGenerator.id)}
        </View>
    );
}
