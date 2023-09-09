import { AuthContainer } from '@components/AuthContainer';
import { SignIn } from '@components/SignIn';
import type { FC } from 'react';
import * as React from 'react';

const AuthPage: FC = () => {
    return (
        <AuthContainer title='Sign in'>
            <SignIn />
        </AuthContainer>
    );
};

export default AuthPage;
