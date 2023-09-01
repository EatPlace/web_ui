import { splitApi } from '@api/splitApi';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@store/entities/user';

export const store = configureStore({
    reducer: {
        [splitApi.reducerPath]: splitApi.reducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(splitApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
