import { getRouteRegister } from '@app/providers/AppRouter/model/constants/routes';
import { SnackBarMessage } from '@components/SnackBarMessage';
import { useAppDispatch } from '@hooks/useAppDispatch';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { fetchLogin } from '@store/entities/user';
import type { FC } from 'react';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignIn: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleOpenSnackbar = (message: string) => {
        setSnackbarMessage(message);
        setOpenSnackbar(true);
    };

    const onRegisterClick = () => {
        navigate(getRouteRegister());
    };

    const onAuthSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get('email') as string;
        const password = data.get('password') as string;

        if (username && password) {
            const data = { username, password };
            dispatch(fetchLogin(data)).catch((error) => {
                handleOpenSnackbar(error.message);
            });
        }
    };

    return (
        <Box
            noValidate
            component='form'
            sx={{ mt: 1 }}
            onSubmit={onAuthSubmit}
        >
            <TextField
                fullWidth
                required
                autoComplete='email'
                id='email'
                label='Email Address'
                margin='normal'
                name='email'
            />
            <TextField
                fullWidth
                required
                autoComplete='current-password'
                id='password'
                label='Password'
                margin='normal'
                name='password'
                type='password'
            />
            <Button
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                type='submit'
                variant='contained'
            >
                Sign In
            </Button>
            <Grid container>
                <Grid
                    item
                    xs
                >
                    <Link
                        variant='body2'
                        onClick={onRegisterClick}
                    >
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link
                        variant='body2'
                        onClick={onRegisterClick}
                    >
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
            <SnackBarMessage
                message={snackbarMessage}
                open={openSnackbar}
                severity='error'
                onClose={handleCloseSnackbar}
            />
        </Box>
    );
};
