import { Header } from '@components/Header';
import { Box } from '@mui/material';
import type { FC } from 'react';

import { AppRouter } from './providers/AppRouter';
export const App: FC = () => {
    return (
        <div>
            <Header />
            <Box>
                <AppRouter />
            </Box>
        </div>
    );
};
