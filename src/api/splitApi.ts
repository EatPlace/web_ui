import { getApiUrl } from '@api/getApiUrl';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const splitApi = createApi({
    endpoints: () => ({}),
    baseQuery: fetchBaseQuery({
        baseUrl: getApiUrl(),
        prepareHeaders(headers) {
            const accessToken = localStorage.getItem('authToken');

            // Если есть токен, добавьте его в заголовки
            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`);
            }

            headers.set('Content-Type', 'multipart/form-data');

            return headers;
        },
        credentials: 'include',
    }),
});
