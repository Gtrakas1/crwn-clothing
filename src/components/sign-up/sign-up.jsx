import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { SignUpStyle, Title } from './sign-up.styles';

const Signup = () => {
    const [user, setUser] = useState({ displayName: '', email: '', password: '', confirmPassword: '' })

    const { displayName, email, password, confirmPassword } = user

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('passwords dont match')
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName });

            setUser({ ...user })
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;

        setUser({ ...user, [name]: value })
    }

    return (
        <SignUpStyle>
            <Title>I do not have an account</Title>
            <span>Sign up with your email</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='DisplayName'
                    required />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='email'
                    required />

                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='password'
                    required />

                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required />

                <CustomButton type='submit'> Sign Up </CustomButton>
            </form></SignUpStyle>
    )

}

export default Signup