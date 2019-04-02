import { combineReducers } from 'redux';
import errors from './errors';
import app from './app';
import feed from './feed';
import user from './user';
import users from './users';
import activity from './activity';
import posts from './posts';
import comments from './comments';

export default combineReducers({
    errors,
    app,
    feed,
    user,
    users,
    activity,
    posts,
    comments
});