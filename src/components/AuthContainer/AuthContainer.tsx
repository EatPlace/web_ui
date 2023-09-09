import { Copyright } from '@components/Copyright';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import type { FC } from 'react';
import * as React from 'react';

type AuthContainerProps = {
    title: string;
    children: React.ReactNode;
};

import { Typography } from '@mui/material';

import styles from './AuthContainer.module.css';
export const AuthContainer: FC<AuthContainerProps> = ({ title, children }) => {
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
                    {title}
                </Typography>
                {children}
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
};
