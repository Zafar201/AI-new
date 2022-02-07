import { WEBINAR_LIST_FAIL, WEBINAR_LIST_REQUEST, WEBINAR_LIST_SUCCESS } from "../constants/webinarConstant";

export const webinarListReducer = (state ={loading:true,webinar:[] },action) =>{
    switch(action.type){
        case WEBINAR_LIST_REQUEST:
            return {loading:true};
        case WEBINAR_LIST_SUCCESS:
            return {loading:false,webinar:action.payload}
        case WEBINAR_LIST_FAIL:
            return {loading:false,error:action.payload}    
         default:
             return state;   
    }
}