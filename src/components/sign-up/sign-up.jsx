import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { SignUpStyle, Title } from './sign-up.styles';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            alert('passwords dont match')
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch (error) {
            console.error(error)
        }
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <SignUpStyle>
                <Title>I do not have an account</Title>
                <span>Sign up with your email</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='DisplayName'
                        required />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='email'
                        required />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='password'
                        required />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required />

                    <CustomButton type='submit'> Sign Up </CustomButton>
                </form></SignUpStyle>
        )
    }
}

export default Signup