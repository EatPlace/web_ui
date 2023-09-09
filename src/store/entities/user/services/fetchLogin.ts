import { axiosInstance } from '@api/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorMessages } from '@store/entities/user/constants/errors';

// import { getApiUrl } from '@api/getApiUrl';
// import * as process from 'process';
import type { AuthResponse, AuthSchema } from '../types/UserSchema';

export const fetchLogin = createAsyncThunk<AuthResponse, AuthSchema>('auth/login', async (data) => {
    const response = await axiosInstance
        .post('auth/login', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        .then((response) => response?.data)
        .catch((error) => {
            const code = error.response?.data?.detail as keyof typeof errorMessages;
            const message = errorMessages[code] || errorMessages.UNKNOWN_ERROR;
            throw message;
        });

    return response;
});

// export const fetchOauth = createAsyncThunk('oauth/authorize', async () => {
//     const url = process.env.REACT_APP_OAUTH_AUTHORIZE_URL + '?redirect_uri=' + getApiPathUrl('oauth/callback');
//     window.location = url as unknown as Location;
// });
