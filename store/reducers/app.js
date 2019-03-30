const initialState = {
    showAbout: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_ABOUT':
            return {
                ...state,
                showAbout: true
            };
        case 'CLOSE_ABOUT':
            return {
                ...state,
                showAbout: false
            };
        default:
            return state
    }
}