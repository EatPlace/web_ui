import { AuthContainer } from '@components/AuthContainer';
import { SignUp } from '@components/SignUp';
import type { FC } from 'react';
import * as React from 'react';

const RegisterPage: FC = () => {
    return (
        <AuthContainer title='Sign up'>
            <SignUp />
        </AuthContainer>
    );
};

export default RegisterPage;
