import { BOOTCAMP_LIST_FAIL, BOOTCAMP_LIST_REQUEST, BOOTCAMP_LIST_SUCCESS, CONTACTUS_FAIL, CONTACTUS_REQUEST, CONTACTUS_SUCCESS, COURSECATEGORY_FAIL, COURSECATEGORY_REQUEST, COURSECATEGORY_SUCCESS, HELP_LIST_FAIL, HELP_LIST_REQUEST, HELP_LIST_SUCCESS, HIRESTUDENT_FAIL, HIRESTUDENT_REQUEST, HIRESTUDENT_SUCCESS, PAYMENT_FAIL, PAYMENT_REQUEST, PAYMENT_SUCCESS, SLIDER_EMAIL_FAIL, SLIDER_EMAIL_REQUEST, SLIDER_EMAIL_SUCCESS, TASK_FAIL, TASK_REQUEST, TASK_SUCCESS } from "../constants/generalConstant";

export const bootcampListReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case BOOTCAMP_LIST_REQUEST:
            return { loading: true };
        case BOOTCAMP_LIST_SUCCESS:
            return { loading: false, bootcamps: action.payload }
        case BOOTCAMP_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const helpReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case HELP_LIST_REQUEST:
            return { loading: true }
        case HELP_LIST_SUCCESS:
            return { loading: false, helpQuery: action.payload }
        case HELP_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const ConatactReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case CONTACTUS_REQUEST:
            return { loading: true }
        case CONTACTUS_SUCCESS:
            return { loading: false, contactQuery: action.payload ,success:true}
        case CONTACTUS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const sliderEmailReducer=(state = { loading: true }, action)=>{
    switch(action.type){
        case SLIDER_EMAIL_REQUEST:
            return { loading: true }
        case SLIDER_EMAIL_SUCCESS:
            return { loading: false, contactQuery: action.payload ,success:true}
        case SLIDER_EMAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state  
    }
}

export const paymentReducer=(state={loading:true},action)=>{
    switch(action.type){
        case PAYMENT_REQUEST:
            return {loading:true}
        case PAYMENT_SUCCESS:
            return {loading:false,paymentStatus:action.payload}
        case PAYMENT_FAIL:
            return {loading:false,error:action.payload}  
        default:
            return state          
    }
}
export const HireStudentReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case HIRESTUDENT_REQUEST:
            return { loading: true }
        case HIRESTUDENT_SUCCESS:
            return { loading: false, hireQurey: action.payload }
        case HIRESTUDENT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
export const courseCategoryReducer = (state = { loading: true,courseCategory:[] }, action) => {
    switch (action.type) {
        case COURSECATEGORY_REQUEST:
            return { loading: true }
        case COURSECATEGORY_SUCCESS:
            return { loading: false, courseCategory: action.payload }
        case COURSECATEGORY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
export const taskReducer = (state = { loading: true,task:[] }, action) => {
    switch (action.type) {
        case TASK_REQUEST:
            return { loading: true }
        case TASK_SUCCESS:
            return { loading: false, taskQuery: action.payload }
        case TASK_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}