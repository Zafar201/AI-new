import axios from "axios";
import { LH } from "../constants/generalConstant";
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT,EMAIL_VERIFICATION,EMAIL_VERIFICATION_FAILED } from "../constants/userConstants"

export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });

    try {
        const { data } = await axios.post(`${LH}/auth/login`, { email, password });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data && data.user ? data.user : data))
        localStorage.setItem("userToken", JSON.stringify(data && data.tokens ? data.tokens : data))
    } catch (error) {
        console.log('failed', error);
        dispatch({
            type: USER_SIGNIN_FAIL, payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


export const register = (name, password, email,phone) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST, payload:{name, password, email, phone}});
    try {
        const { data } = await axios.post(`${LH}/auth/register`, {name, password, email, phone, role: 'student'});
        console.log({data});
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
        localStorage.setItem("userInfo", JSON.stringify(data && data.user ? data.user : data))
        localStorage.setItem("userToken", JSON.stringify(data && data.tokens ? data.tokens : data))
    } catch (error) {
        console.log('failed', error);
        dispatch({
            type: USER_REGISTER_FAIL, payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


export const verifyEmail = () => async (dispatch) => {
    try {
        axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWQyZmQ0YTA4ZmY5NjQ5MGM3NWUxY2YiLCJpYXQiOjE2NDM1MzY0NjksImV4cCI6MTY0MzUzODI2OSwidHlwZSI6ImFjY2VzcyJ9.eZho01-lR0FheGt8kCdjPS08PXDnrnpQLTFnDILNyJ8`;
        const verifyEmail = await axios.post(`${LH}/auth/verify-email `,);
        dispatch({ type: EMAIL_VERIFICATION, payload: verifyEmail })
    } catch (error) {
        console.log('failed', error);
        dispatch({
            type: EMAIL_VERIFICATION_FAILED, payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const OtpVerify = (otp) => async (dispatch) => {
    try {
        // axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWQyZmQ0YTA4ZmY5NjQ5MGM3NWUxY2YiLCJpYXQiOjE2NDM1MzY0NjksImV4cCI6MTY0MzUzODI2OSwidHlwZSI6ImFjY2VzcyJ9.eZho01-lR0FheGt8kCdjPS08PXDnrnpQLTFnDILNyJ8`;
        const verifyOtp = await axios.post(`${LH}/auth/verify-phone`,{otp:5456});
        console.log({verifyOtp})
        // dispatch({ type: EMAIL_VERIFICATION, payload: verifyEmail })
    } catch (error) {
        console.log('failed', error);
        dispatch({
            type: EMAIL_VERIFICATION_FAILED, payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}


export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_SIGNOUT })
}