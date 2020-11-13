import React from 'react'
import Signin from '../../components/sign-in/sign-in'
import Signup from '../../components/sign-up/sign-up'
import { SignInSignUpCon } from './sign-in-and-sign-up.styles'

const SignInSignUp = () => (
    <SignInSignUpCon>
        <Signin />
        <Signup />
    </SignInSignUpCon>
)

export default SignInSignUp