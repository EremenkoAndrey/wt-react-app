import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment/moment';
import WTText from '../WTText';


function Date({ date, ...props }) {
    const formattedDate = moment(date).fromNow();
    return (<WTText {...props}>{formattedDate}</WTText>);
}

Date.propTypes = {
    date: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    user: state.users[ownProps.id]
});

export default connect(mapStateToProps)(Date);
