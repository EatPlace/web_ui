import { getRouteAuth } from '@app/providers/AppRouter/model/constants/routes';
import { AuthContainer } from '@components/AuthContainer';
import { SignUp } from '@components/SignUp';
import { SignUpCongratulation } from '@components/SignUpCongratulation';
import { SnackBarMessage } from '@components/SnackBarMessage';
import type { AlertColor } from '@mui/material';
import type { FC } from 'react';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage: FC = () => {
    const navigate = useNavigate();
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>('success'); // 'success' or 'error'

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleSnackbar = (message: string, severity: AlertColor) => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setOpenSnackbar(true);
        severity === 'success' && setRegistrationSuccess(true);
    };

    const onAuthClick = () => {
        navigate(getRouteAuth());
    };

    return (
        <>
            {registrationSuccess ? (
                <AuthContainer variant='congrats'>
                    <SignUpCongratulation onConfirm={onAuthClick} />
                </AuthContainer>
            ) : (
                <AuthContainer title='Sign up'>
                    <SignUp
                        onRegistrationError={(message) => handleSnackbar(message, 'error')}
                        onRegistrationSuccess={() => handleSnackbar('Вы успешно зарегистрировались', 'success')}
                    />
                </AuthContainer>
            )}
            <SnackBarMessage
                message={snackbarMessage}
                open={openSnackbar}
                severity={snackbarSeverity}
                onClose={handleCloseSnackbar}
            />
        </>
    );
};

export default RegisterPage;
