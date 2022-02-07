import React from 'react'
import ChatUI from "./ChatUI"
import { useSelector } from 'react-redux';

function SignIn({ auth, user }) {

    const userSignin = useSelector(state => state.userSignin)
    const { loading, error, userInfo } = userSignin



    return (
        <div>{userInfo ?
            <>
                {/* <ChatUI user={userInfo} /> */}
            </>
            :
            <div></div>
            }
        </div>
    )
}

export default SignIn
