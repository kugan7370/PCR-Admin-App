import { AuthConstants } from "../constants/AuthConstant";


const initialState = {
    user: null,

}

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AuthConstants.LOGIN_SUCCESS:
            state = { ...state, user: payload }
            break;

        default:
            state = initialState
            break;
    }
    return state;

}