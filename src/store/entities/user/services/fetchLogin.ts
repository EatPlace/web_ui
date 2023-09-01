import { axiosInstance } from '@api/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
        .catch((error) => console.error(error));

    return response;
});

// export const fetchOauth = createAsyncThunk('oauth/authorize', async () => {
//     const url = process.env.REACT_APP_OAUTH_AUTHORIZE_URL + '?redirect_uri=' + getApiPathUrl('oauth/callback');
//     window.location = url as unknown as Location;
// });
