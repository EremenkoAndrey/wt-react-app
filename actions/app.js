export function SHOW_ABOUT() {
    return (dispatch) => {
        return dispatch({ type: "SHOW_ABOUT" })
    };
}

export function CLOSE_ABOUT() {
    return (dispatch) => {
        return dispatch({ type: "CLOSE_ABOUT" })
    };
}