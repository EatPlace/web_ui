import { useAuthRedisLogoutAuthLogoutPostMutation } from '@api/generatedApi';
import { getRouteMain } from '@app/providers/AppRouter/model/constants/routes';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { Box, Button } from '@mui/material';
import { getUserIsAuth, userActions } from '@store/entities/user';
import type { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Menu.module.css';
export const Menu: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector(getUserIsAuth);

    const [logoutMutation] = useAuthRedisLogoutAuthLogoutPostMutation();

    const onMainClick = () => {
        navigate(getRouteMain());
    };

    const onLogOutClick = () => {
        logoutMutation();
        dispatch(userActions.logOut());
    };

    return (
        <Box className={styles.rowContainer}>
            <Button
                className={styles.logo}
                color='secondary'
                onClick={onMainClick}
            >
                EatPlace
            </Button>
            {isAuth && (
                <Button
                    color='secondary'
                    onClick={onLogOutClick}
                >
                    LogOut
                </Button>
            )}
        </Box>
    );
};
