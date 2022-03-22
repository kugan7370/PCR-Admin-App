import { AuthConstants } from "../constants/AuthConstant"


export const userLogin = (user) => {

    return (dispatch) => {
        dispatch({
            type: AuthConstants.LOGIN_SUCCESS,
            payload: user
        })
    }
}