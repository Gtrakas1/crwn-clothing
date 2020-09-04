import React from 'react'
import './sign-in-and-sign-up.scss'
import Signin from '../../components/sign-in/sign-in'
import Signup from '../../components/sign-up/sign-up'

const SignInSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <Signin />
        <Signup />
    </div>
)

export default SignInSignUp