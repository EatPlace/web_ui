import { useGetProductsProductsGetQuery, useGetProfileProfileGetQuery } from '@api/generatedApi';
import { useAppDispatch } from '@hooks/useAppDispatch';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { fetchLogin } from '@store/entities/user';
import type { FC } from 'react';
import * as React from 'react';

import styles from './AuthPage.module.css';

function Copyright(props: any) {
    return (
        <Typography
            align='center'
            color='text.secondary'
            variant='body2'
            {...props}
        >
            {'Copyright © '}
            <Link
                color='inherit'
                href='https://mui.com/'
            >
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const AuthPage: FC = () => {
    const products = useGetProductsProductsGetQuery({});
    const eatLists = useGetProfileProfileGetQuery();
    const dispatch = useAppDispatch();

    const onAuthSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const username = data.get('email') as string;
        const password = data.get('password') as string;

        console.log({
            eatLists: eatLists,
            username: username,
            password: password,
            products: products,
        });
        if (username && password) {
            const data = { username, password };
            dispatch(fetchLogin(data));
        }
    };

    return (
        <Container
            component='main'
            maxWidth='xs'
        >
            <CssBaseline />
            <Box className={styles.formContainer}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography
                    component='h1'
                    variant='h5'
                >
                    Sign in
                </Typography>
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
                    <FormControlLabel
                        label='Remember me'
                        control={
                            <Checkbox
                                color='primary'
                                value='remember'
                            />
                        }
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
                                href='#'
                                variant='body2'
                            >
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link
                                href='#'
                                variant='body2'
                            >
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
};

export default AuthPage;
