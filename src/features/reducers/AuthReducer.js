import { AuthConstants } from "../constants/AuthConstant";


const initialState = {
    user: null,
    authendication: false,

}

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AuthConstants.LOGIN_SUCCESS:
            state = { ...state, user: payload, authendication: true }
            break;

        default:
            state = initialState
            break;
    }
    return state;

}