import React, { useState } from 'react'
import CustomButton from '../custom-button/custom-button'
import FormInput from '../form-input/form-input'

import { ButtonBar, SignInStyle, Title } from './sign-in.styles'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action'
import { connect } from 'react-redux'

const Singin = ({ googleSignInStart, emailSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' })

    const { email, password } = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();

        emailSignInStart(email, password)
    }

    const handleChange = e => {
        const { value, name } = e.target

        setCredentials({ ...userCredentials, [name]: value })
    }

    return (

        <SignInStyle>
            <Title>i already have an account</Title>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' value={email} handleChange={handleChange} label='Email' required />
                <FormInput name='password' type='password' value={password} handleChange={handleChange} label='Password' required />
                <ButtonBar>
                    <CustomButton type='submit'> Sign In </CustomButton>
                    <CustomButton
                        type='button'
                        onClick={googleSignInStart}
                        isGoogleSignIn> Sign in With Google  </CustomButton>
                </ButtonBar>
            </form>
        </SignInStyle>
    )


}

const mapToDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapToDispatchToProps)(Singin)