import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants";

export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true }
        case USER_SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload.user, studentInfo: action.payload.student|| {}}
        case USER_SIGNIN_FAIL:
            return { loading: false}
        case USER_SIGNOUT:
            return {}
        default:
            return state
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }
        case USER_REGISTER_SUCCESS:
            return { loading: false, userCreatedInfo: action.payload.user || {}, userInfo: action.payload.user || {}, studentInfo: action.payload.student || {} }
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}