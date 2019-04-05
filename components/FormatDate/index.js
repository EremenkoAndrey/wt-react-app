import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import WTText from '../WTText';


function FormatDate({ date, ...props }) {
    const formattedDate = moment(date).fromNow();
    return (<WTText {...props}>{formattedDate}</WTText>);
}

FormatDate.propTypes = {
    date: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    user: state.users[ownProps.id]
});

export default connect(mapStateToProps)(FormatDate);
