import { useGetProfileProfileGetQuery } from '@api/generatedApi';
import { EatListsBoard } from '@components/EatListsBoard';
import { Box, CircularProgress } from '@mui/material';
import type { FC } from 'react';

const MainPage: FC = () => {
    const { data: profile, isLoading } = useGetProfileProfileGetQuery();

    return <Box>{isLoading ? <CircularProgress /> : <EatListsBoard eatLists={profile?.lists} />}</Box>;
};
export default MainPage;
