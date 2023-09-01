import type { FC } from 'react';
import { Suspense } from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';

import { routeConfig } from '../config/routeConfig';
import type { AppRoute } from '../model/types/AppRoute';
import { RequireAuth } from './RequireAuth';

export const AppRouter: FC = () => {
    const renderWithWrapper = (route: AppRoute) => {
        const element = <Suspense fallback=''>{route.element}</Suspense>;

        return (
            <Route
                element={route.auth === undefined ? element : <RequireAuth require={route.auth}>{element}</RequireAuth>}
                key={route.path}
                path={route.path}
            />
        );
    };

    return <Routes>{routeConfig.map(renderWithWrapper)}</Routes>;
};
