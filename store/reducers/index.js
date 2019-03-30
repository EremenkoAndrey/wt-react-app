import { combineReducers } from 'redux';
import errors from './errors';
import app from './app';
import feed from './feed';
import user from './user';
import users from './users';

export default combineReducers({
    errors,
    app,
    feed,
    user,
    users
});