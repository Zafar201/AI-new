import axios from "axios";
import { WEBINAR_LIST_FAIL, WEBINAR_LIST_REQUEST, WEBINAR_LIST_SUCCESS } from "../constants/webinarConstant"
import { LH } from "../constants/generalConstant";

export const webinarCourse = ( )=>  async (dispatch) =>{
    dispatch({
        type:WEBINAR_LIST_REQUEST
       
    });
  
    try{
       const {data} =await axios.get(`${LH}/webinar`)
       dispatch({type:WEBINAR_LIST_SUCCESS,payload:data})
       
    }catch(error){
        dispatch({type:WEBINAR_LIST_FAIL,payload:error.message})
       
    }
}