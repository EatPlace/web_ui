import type { AlertColor } from '@mui/material/Alert';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import type { FC } from 'react';
import React from 'react';

type SnackBarMessageProps = {
    open: boolean | undefined;
    onClose: ((event: Event | React.SyntheticEvent<any, Event>) => void) | undefined;
    message: string | undefined;
    severity: AlertColor | undefined;
};

export const SnackBarMessage: FC<SnackBarMessageProps> = ({ open, onClose, message, severity }) => {
    return (
        <Snackbar
            autoHideDuration={6000}
            open={open}
            onClose={onClose}
        >
            <MuiAlert
                elevation={6}
                severity={severity}
                variant='filled'
                onClose={onClose}
            >
                {message}
            </MuiAlert>
        </Snackbar>
    );
};
