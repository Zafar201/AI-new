import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { categoryListReducer } from "./reducer/categoryReducer";
import { courseListReducer } from "./reducer/courseReducer";
import { bootcampListReducer, ConatactReducer, helpReducer, HireStudentReducer, paymentReducer, sliderEmailReducer, courseCategoryReducer, taskReducer } from "./reducer/generalReducer";
import { userRegisterReducer, userSigninReducer } from "./reducer/userReducer";
import { webinarListReducer } from "./reducer/webinarReducer";
import { couponReducer } from "./reducer/couponReducer";

const initialState= {
  userSignin:{
    userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
  }
};
const reducer = combineReducers({
  courseList:courseListReducer,
  webinarList:webinarListReducer,
  bootcampList:bootcampListReducer,
  userSignin:userSigninReducer,
  userRegister:userRegisterReducer,
  help:helpReducer,
  contact:ConatactReducer,
  emailSLider:sliderEmailReducer,
  paymentReducers:paymentReducer,
  hireStudentReducers:HireStudentReducer,
  courseCategory:courseCategoryReducer,
  task:taskReducer,
  category:categoryListReducer,
  coupon: couponReducer,
})

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
const store =createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk) ));

export default store