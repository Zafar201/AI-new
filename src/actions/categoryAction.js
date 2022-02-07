import axios from "axios";
import { CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_LIST_FAIL } from "../constants/categoryConstant"
import { LH, PAYMENT_FAIL, PAYMENT_REQUEST } from "../constants/generalConstant";

export const listCategory = ( ) =>  async (dispatch) =>{
    dispatch({
        type:CATEGORY_LIST_REQUEST
       
    });
  
    try{
       const {data} =await axios.get(`${LH}/category`)
       console.log(data)
       dispatch({type:CATEGORY_LIST_SUCCESS,payload:data})
       
    }catch(error){
        dispatch({type:CATEGORY_LIST_FAIL,payload:error.message})
       
    }
}
