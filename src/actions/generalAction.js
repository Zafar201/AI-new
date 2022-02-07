import axios from "axios";
import { BOOTCAMP_LIST_FAIL, BOOTCAMP_LIST_REQUEST, BOOTCAMP_LIST_SUCCESS, CONTACTUS_FAIL, CONTACTUS_REQUEST, CONTACTUS_SUCCESS, COURSECATEGORY_FAIL, COURSECATEGORY_REQUEST, COURSECATEGORY_SUCCESS, HELP_LIST_FAIL, HELP_LIST_REQUEST, HELP_LIST_SUCCESS, HIRESTUDENT_FAIL, HIRESTUDENT_REQUEST, HIRESTUDENT_SUCCESS, LH, PAYMENT_FAIL, PAYMENT_REQUEST, PAYMENT_SUCCESS, SLIDER_EMAIL_FAIL, SLIDER_EMAIL_REQUEST, SLIDER_EMAIL_SUCCESS, TASK_FAIL, TASK_REQUEST, TASK_SUCCESS } from "../constants/generalConstant";


export const listBootcamp = ( )=>  async (dispatch) =>{
    dispatch({
        type:BOOTCAMP_LIST_REQUEST
       
    });
  
    try{
       const {data} =await axios.get(`${LH}/category`)
       dispatch({type:BOOTCAMP_LIST_SUCCESS,payload:data})
       
    }catch(error){
        dispatch({type:BOOTCAMP_LIST_FAIL,payload:error.message})
       
    }
}


export const helpList = (name,email,query,type) =>async(dispatch)=>{
    dispatch({type:HELP_LIST_REQUEST,payload:name,email,query,type});

    try{
        const {data} =await axios.post(`${LH}/email-enquiry`,{name,email,query,type})
        dispatch({type:HELP_LIST_SUCCESS,payload:data})

    }catch(error){
        dispatch({type:HELP_LIST_FAIL,payload:error.message})
    }
}


export const contactList =(name,email,query,phoneNumber)=>async(dispatch)=>{
    dispatch({type:CONTACTUS_REQUEST,payload:name,email,query,phoneNumber})
    try{
        const {data}=await axios.post(`${LH}/contact-us`,{name,email,query,phoneNumber})
        dispatch({type:CONTACTUS_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:CONTACTUS_FAIL,payload:error.message})
    }
}


export const sliderEmail =(email)=>async(dispatch)=>{
    dispatch({type:SLIDER_EMAIL_REQUEST,payload:email})
    try{
        const {data}=await axios.post(`${LH}/app/api/know/more`,{email})
        dispatch({type:SLIDER_EMAIL_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:SLIDER_EMAIL_FAIL,payload:error.message})
    }
}

export const paymentAction=(course_id,course_name,price)=>async(dispatch)=>{
    dispatch({type:PAYMENT_REQUEST,payload:course_id,course_name,price})
    try{
        const {data}=await axios.post(`${LH}/app/api/payment`,{course_id,course_name,price})
        dispatch({type:PAYMENT_SUCCESS,payload:data.results.data})
    }catch(error){
        dispatch({type:PAYMENT_FAIL,payload:error.message})
    }
 }

 export const hireStudent=(name,workEmail,needs,phoneNumber)=>async(dispatch)=>{
     dispatch({type:HIRESTUDENT_REQUEST,payload:name,workEmail,needs,phoneNumber})
     try{
        const {data}= await axios.post(`${LH}/hire-student`,{name,workEmail,needs,phoneNumber}) 
        dispatch({type:HIRESTUDENT_SUCCESS,payload:data})
     }catch(error){
         dispatch({type:HIRESTUDENT_FAIL,payload:error.message})
     }
 }


 export const categoryCourse=()=>async(dispatch)=>{
     dispatch({type:COURSECATEGORY_REQUEST})
     try{
        const {data}= await axios.get(`${LH}/app/api/category/list`) 
        dispatch({type:COURSECATEGORY_SUCCESS,payload:data.results.data})
        console.log(data,'data');
     }catch(error){
         dispatch({type:COURSECATEGORY_FAIL,payload:error.message})
     }
 }


 export const taskList=()=>async(dispatch)=>{
     dispatch({type:TASK_REQUEST})
     try{
        const {data}= await axios.get(`${LH}/app/api/task/list`) 
        dispatch({type:TASK_SUCCESS,payload:data.results.data})
        console.log(data,'data');
     }catch(error){
         dispatch({type:TASK_FAIL,payload:error.message})
     }
 }