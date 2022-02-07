import { APPLY_COURSE_FAIL, APPLY_COURSE_REQUEST, APPLY_COURSE_SUCCESS } from "../constants/couponConstants";

export const couponReducer = (state = { loading: false, data:{}, error: null }, action) =>{
    switch(action.type){
        case APPLY_COURSE_REQUEST:
            return { loading:true };
        case APPLY_COURSE_SUCCESS:
            return { loading:false, data:action.payload }
        case APPLY_COURSE_FAIL:
            return { loading:false, error:action.payload }    
         default:
             return state;   
    }
}