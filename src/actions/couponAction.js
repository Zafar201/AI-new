import axios from "axios";
import { APPLY_COURSE_FAIL, APPLY_COURSE_REQUEST, APPLY_COURSE_SUCCESS } from "../constants/couponConstants";
import { LH } from "../constants/generalConstant";

export const applyCouponCode = ({label, amount, studentId}) =>  async (dispatch) => {
    dispatch({
        type: APPLY_COURSE_REQUEST
    });
    try {
        const tokens = JSON.parse(localStorage.getItem('userToken') || {})
        console.log({tokens});
        const { data } = await axios.patch(`${LH}/coupon`, { label, amount, studentId }, { headers: { Authorization: `Bearer ${tokens?.access?.token || ''}` } });
        dispatch({type: APPLY_COURSE_SUCCESS, payload:data})
        return data;
    } catch(error) {
        console.error(error);
        dispatch({type: APPLY_COURSE_FAIL, payload:error.message})
    }
}