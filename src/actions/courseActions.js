import axios from "axios";
import { COURSE_LIST_FAIL, COURSE_LIST_REQUEST, COURSE_LIST_SUCCESS, GET_COURSE_FAIL, GET_COURSE_REQUEST, GET_COURSE_SUCCESS } from "../constants/courseConstant"
import { LH, PAYMENT_FAIL, PAYMENT_REQUEST } from "../constants/generalConstant";

export const listCourse = ( ) =>  async (dispatch) =>{
    dispatch({
        type:COURSE_LIST_REQUEST
    });
  
    try{
       const {data} =await axios.get(`${LH}/course`)
       console.log(data)
       dispatch({type:COURSE_LIST_SUCCESS,payload:data})
       
    }catch(error){
        dispatch({type:COURSE_LIST_FAIL,payload:error.message})
       
    }
}

export const getCourseById = (courseId) =>  async (dispatch) =>{
    dispatch({
        type: GET_COURSE_REQUEST
    });
  
    try{
       const {data} =await axios.get(`${LH}/course/${courseId}`)
       console.log(data)
       dispatch({type: GET_COURSE_SUCCESS, payload:data})
       
    }catch(error){
        console.error(error);
        dispatch({type: GET_COURSE_FAIL, payload:error.message})
       
    }
}

export const codingEnables = (courseId) =>  async (dispatch) =>{
    dispatch({
        type: GET_COURSE_REQUEST
    });
  
    try{
       const {data} =await axios.get(`${LH}/coding-enablers/`)
       console.log({data})
    //    dispatch({type: GET_COURSE_SUCCESS, payload:data})
       
    }catch(error){
        console.error(error);
        dispatch({type: GET_COURSE_FAIL, payload:error.message})
       
    }
}

export const getPayment=({course_id,course_name,price})=>async(dispatch)=>{
    dispatch({
        type:PAYMENT_REQUEST,payload:course_id,course_name,price
    })
    try{
        const {data}=await axios.get(`${LH}/app/api/payment`,course_id,course_name,price)
        dispatch({type:COURSE_LIST_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:PAYMENT_FAIL,payload:error.message})
    }
}