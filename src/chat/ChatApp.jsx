import React from 'react'
// import firebase from "firebase/app"
// import "firebase/auth"
// import { useAuthState } from "react-firebase-hooks/auth"
import SignIn from './SignIn'
import { useSelector } from 'react-redux'

// firebase.initializeApp({
//     apiKey: "AIzaSyD73rprPmSBf1P_gUOIFtBi3uEsg-v7rhU",
//     authDomain: "ai-brillance.firebaseapp.com",
//     projectId: "ai-brillance",
//     storageBucket: "ai-brillance.appspot.com",
//     messagingSenderId: "513430270906",
//     appId: "1:513430270906:web:be40285b764c5e631b2383",
//     measurementId: "G-RVTG8DDV4W"
// })

// const auth = firebase.auth()
function ChatApp() {

    // const userSignin = useSelector(state => state.userSignin)
    // const { loading, error, userInfo } = userSignin

    // const [userInfo] = useAuthState(auth)
    return (
        <div>
            {/* <SignIn auth={auth} user={userInfo} /> */}
        </div>
    )
}

export default ChatApp