import { useGetProfileProfileGetQuery } from '@api/generatedApi';
import { Box } from '@mui/material';
import type { FC } from 'react';

import styles from './MainPage.module.css';

const MainPage: FC = () => {
    const { data: profile } = useGetProfileProfileGetQuery();

    console.log({ profile: profile });

    return <Box className={styles.mainPage}>Main Page</Box>;
};
export default MainPage;
