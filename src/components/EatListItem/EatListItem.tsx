import { useGetProfileEatListProfileListIdGetQuery } from '@api/generatedApi';
import { EatListProducts } from '@components/EatListProducts';
import { Box, CircularProgress, Typography } from '@mui/material';
import type { FC } from 'react';

type EatListItemProps = {
    listId: number;
    name: string;
};

import styles from './EatListItem.module.css';
export const EatListItem: FC<EatListItemProps> = ({ listId, name }) => {
    const { data: eatList, isLoading } = useGetProfileEatListProfileListIdGetQuery({ listId });

    return (
        <Box className={styles.centerContainer}>
            <Typography variant='h6'>Выбранный список: {name}</Typography>
            {isLoading ? <CircularProgress size={30} /> : <EatListProducts products={eatList?.products} />}
        </Box>
    );
};
