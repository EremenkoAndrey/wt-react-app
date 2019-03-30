import ERROR_HANDLER from './errors';
import api from "../services/api";

export function FETCH_USER({ cbAction }) {
    return (dispatch) => {
        api.getUser()
            .then((res) => {
                dispatch(FETCH_USER_SUCCESSFUL(res));
                if(cbAction) {
                    dispatch(cbAction(res));
                }
            })
            .catch(err => dispatch(ERROR_HANDLER(err)));
        return dispatch({ type: 'FETCH_USER' })
    };
}

function FETCH_USER_SUCCESSFUL(res) {
    return (dispatch) => {
        return dispatch({ type: 'FETCH_USER_SUCCESSFUL', payload: res })
    };
}