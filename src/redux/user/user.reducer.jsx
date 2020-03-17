const INITAIL_STATE = {
    currentUsers: null

};



export const userReducer = (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}
