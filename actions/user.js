import ERROR_HANDLER from './errors';
import api from "../services/api";
import { ADD_USERS } from './users';

export function FETCH_USER({ cbAction }) {
    return (dispatch) => {
        api.getUser()
            .then((res) => {
                const { id, lcid, ...rest } = res;
                dispatch(ADD_USERS({ [id]: { ...rest } }));
                dispatch(ADD_USER_SETTINGS(id, { lang: lcid }));
                if(cbAction) {
                    dispatch(cbAction(res));
                }
            })
            .catch(err => dispatch(ERROR_HANDLER(err)));
        return dispatch({ type: 'FETCH_USER' })
    };
}

function ADD_USER_SETTINGS(id, settings) {
    return (dispatch) => {
        return dispatch({ type: 'ADD_USER_SETTINGS', payload: { id, settings } })
    };
}