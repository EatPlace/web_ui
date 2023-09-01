import { getRouteAuth, getRouteMain } from '@app/providers/AppRouter';
import { getUserIsAuth } from '@store/entities/user';
import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
    children: JSX.Element;
    require: boolean;
}

export const RequireAuth: FC<RequireAuthProps> = ({ children, require }) => {
    const isAuth = useSelector(getUserIsAuth);

    const location = useLocation();
    if (!isAuth && require) {
        return (
            <Navigate
                replace
                state={{ from: location }}
                to={getRouteAuth()}
            />
        );
    } else if (isAuth && !require) {
        return (
            <Navigate
                replace
                state={{ from: location }}
                to={getRouteMain()}
            />
        );
    }

    return children;
};
