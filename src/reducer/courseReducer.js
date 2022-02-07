import { COURSE_LIST_FAIL, COURSE_LIST_REQUEST, COURSE_LIST_SUCCESS, GET_COURSE_FAIL, GET_COURSE_REQUEST, GET_COURSE_SUCCESS } from "../constants/courseConstant";

export const courseListReducer = (state ={loading:true,courses:[], course: {} },action) =>{
    switch(action.type){
        case COURSE_LIST_REQUEST:
            return {loading:true};
        case COURSE_LIST_SUCCESS:
            return {loading:false,courses:action.payload}
        case COURSE_LIST_FAIL:
            return {loading:false,error:action.payload}    
        case GET_COURSE_REQUEST:
            return {loading:true};
        case GET_COURSE_SUCCESS:
            return {loading:false, course:action.payload}
        case GET_COURSE_FAIL:
            return {loading:false, error:action.payload}    
         default:
             return state;   
    }
}