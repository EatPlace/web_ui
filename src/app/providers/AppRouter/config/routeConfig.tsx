import { getRouteAuth, getRouteMain, getRouteRegister } from '@app/providers/AppRouter';
import { AuthPage } from '@pages/AuthPage';
import { MainPage } from '@pages/MainPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { RegisterPage } from '@pages/RegisterPage';

import type { AppRoute } from '../model/types/AppRoute';

export const routeConfig: AppRoute[] = [
    { path: getRouteRegister(), element: <RegisterPage />, auth: false },
    { path: getRouteAuth(), element: <AuthPage />, auth: false },
    { path: getRouteMain(), element: <MainPage />, auth: true },
    { path: '*', element: <NotFoundPage /> },
];
