import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WTText from '../WTText';
import dictionary from '../../dictionary';

// TODO добавить язык по-умолчанию
function Dict({
    code, lang, view, ...prop
}) {
    if (!lang) {
        throw new Error('App dictionary: the default language should be set');
    }
    if (!dictionary[lang]) {
        throw new Error('App dictionary: no language dictionary has been created');
    }

    let result = '';
    if (code) {
        result = dictionary[lang][code] || '';
    }
    const ComponentWrapper = view ? view() : WTText;

    /* eslint no-undef:0 */
    if (__DEV__) {
        if (!code) {
            return (<ComponentWrapper {...prop}>Dict: code not passed!</ComponentWrapper>);
        /* eslint no-else-return:0 */
        } else if (!dictionary[lang][code]) {
            return (<ComponentWrapper {...prop}>{`Dict: code ${code} not found in dictionary!`}</ComponentWrapper>);
        }
    }

    return <ComponentWrapper {...prop}>{result}</ComponentWrapper>;
}

Dict.propTypes = {
    code: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    view: PropTypes.func
};

Dict.defaultProps = {
    view: null
};

const mapStateToProps = state => ({
    lang: state.user.settings.lang
});

export default connect(mapStateToProps)(Dict);
