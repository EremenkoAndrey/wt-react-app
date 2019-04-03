import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styles from './slyle';

export default function WTText({ children, style }) {
    const { textStyle } = styles;
    return (
        <Text style={[textStyle, style]}>{children}</Text>
    );
}

WTText.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    /* eslint react/forbid-prop-types:0 */
    style: PropTypes.object
};

WTText.defaultProps = {
    children: '',
    style: {}
};
