import { useRegisterRegisterAuthRegisterPostMutation } from '@api/generatedApi';
import { getRouteAuth } from '@app/providers/AppRouter/model/constants/routes';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { errorMessages } from '@store/entities/user/constants/errors';
import type { FC } from 'react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

type SignUpProps = {
    onRegistrationError?: (message: string) => void;
    onRegistrationSuccess?: () => void;
};

export const SignUp: FC<SignUpProps> = ({ onRegistrationSuccess, onRegistrationError }) => {
    const navigate = useNavigate();
    const [registerMutation] = useRegisterRegisterAuthRegisterPostMutation();

    const onAuthClick = () => {
        navigate(getRouteAuth());
    };

    const onRegisterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get('username') as string;
        const email = data.get('email') as string;
        const password = data.get('password') as string;

        registerMutation({
            userCreate: {
                password: password,
                email: email,
                username: username,
                is_active: true,
                is_superuser: false,
                is_verified: false,
            },
        })
            .unwrap()
            .then(() => {
                onRegistrationSuccess && onRegistrationSuccess();
            })
            .catch((error) => {
                const code = error.data?.detail as keyof typeof errorMessages;
                const message = errorMessages[code] || errorMessages.UNKNOWN_ERROR;
                onRegistrationError && onRegistrationError(message);
            });
    };

    return (
        <Box
            noValidate
            component='form'
            sx={{ mt: 1 }}
            onSubmit={onRegisterSubmit}
        >
            <Grid
                container
                spacing={2}
            >
                <Grid
                    item
                    xs={12}
                >
                    <TextField
                        fullWidth
                        autoComplete='no-name'
                        id='username'
                        label='Username'
                        name='username'
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <TextField
                        fullWidth
                        required
                        autoComplete='email'
                        id='email'
                        label='Email Address'
                        name='email'
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <TextField
                        fullWidth
                        required
                        autoComplete='new-password'
                        id='password'
                        label='Password'
                        name='password'
                        type='password'
                    />
                </Grid>
            </Grid>
            <Button
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                type='submit'
                variant='contained'
            >
                Sign Up
            </Button>
            <Grid
                container
                justifyContent='flex-end'
            >
                <Grid item>
                    <Link
                        variant='body2'
                        onClick={onAuthClick}
                    >
                        Already have an account? Sign in
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
};
