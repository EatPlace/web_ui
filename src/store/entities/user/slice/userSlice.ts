import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { fetchLogin } from '@store/entities/user';

import type { AuthResponse, UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {
    authToken: localStorage.getItem('authToken'),
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthToken: (state, action: PayloadAction<string | null>) => {
            state.authToken = action.payload;
        },
        logOut: (state) => {
            state.authToken = null;
            localStorage.setItem('authToken', '');
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchLogin.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
            state.authToken = action.payload.access_token;
            localStorage.setItem('authToken', state.authToken);
        });
        //     builder.addCase(fetchCheckout.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        //         state.isAuth = true;
        //         state.isInit = true;
        //         state.role = action.payload.role;
        //     });

        //     builder.addCase(fetchCheckout.rejected, (state) => {
        //         state.isInit = true;
        //     });
        //     builder.addCase(fetchLogout.fulfilled, (state) => {
        //         state.isAuth = false;
        //         state.role = undefined;
        //     });
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
