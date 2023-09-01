import { getRouteAuth, getRouteMain } from '@app/providers/AppRouter';
import { AuthPage } from '@pages/AuthPage';
import { MainPage } from '@pages/MainPage';
import { NotFoundPage } from '@pages/NotFoundPage';

import type { AppRoute } from '../model/types/AppRoute';

export const routeConfig: AppRoute[] = [
    { path: getRouteAuth(), element: <AuthPage />, auth: false },
    { path: getRouteMain(), element: <MainPage />, auth: true },
    { path: '*', element: <NotFoundPage /> },
];
