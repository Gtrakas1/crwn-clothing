import React from 'react'
import CustomButton from '../custom-button/custom-button'
import FormInput from '../form-input/form-input'
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'
import { ButtonBar, SignInStyle, Title } from './sign-in.styles'
class Singin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }

    }

    handleChange = e => {
        const { value, name } = e.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <SignInStyle>
                <Title>i already have an account</Title>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='Email' required />
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='Password' required />
                    <ButtonBar>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> Sign in With Google  </CustomButton>
                    </ButtonBar>
                </form>
            </SignInStyle>
        )
    }

}

export default Singin