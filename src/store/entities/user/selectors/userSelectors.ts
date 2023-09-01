import type { RootState } from '@store/index';

export const getUserIsAuth = (state: RootState) => !!state.user.authToken;
export const getUserAuthToken = (state: RootState) => state.user.authToken;
