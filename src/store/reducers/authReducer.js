const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNED_IN_SUCCESS':
            //console.log('sign in succes');
            return {
                ...state,
                authError: null
            }
        case 'SIGNED_IN_ERROR':
           // console.log('error sign in: ',action.err);
            return {
                ...state,
                authError: action.err
            }
        case 'SIGNED_OUT_SUCCESS':
            console.log("SIGNED_OUT_SUCCESS")
            return state;
        default:
            return state;
    }
}

export default authReducer;