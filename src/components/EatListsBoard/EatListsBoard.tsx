import type { ProfileEatList } from '@api/generatedApi';
import { EatListItem } from '@components/EatListItem';
import BlockIcon from '@mui/icons-material/Block';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Container, Typography } from '@mui/material';
import type { GridRowParams } from '@mui/x-data-grid';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { type FC, useState } from 'react';

type EatListsBoardProps = {
    eatLists: ProfileEatList[] | undefined;
};

import styles from './EatListsBoard.module.css';
export const EatListsBoard: FC<EatListsBoardProps> = ({ eatLists }) => {
    const [selectedEatList, setSelectedEatList] = useState<ProfileEatList | null>(null);

    const onRowClick = (params: GridRowParams) => {
        setSelectedEatList(params.row as ProfileEatList);
    };

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Название', width: 180 },
        { field: 'total_price_per_month', headerName: 'Цена', width: 100 },
        { field: 'currency', headerName: 'Валюта', width: 80 },
        { field: 'calories_per_month', headerName: 'Калории', width: 80 },
        { field: 'total_carb_per_month', headerName: 'Углеводы, г', width: 100 },
        { field: 'total_fat_per_month', headerName: 'Жиры, г', width: 80 },
        { field: 'total_protein_per_month', headerName: 'Белки, г', width: 80 },
        { field: 'calcium_per_month', headerName: 'Кальций, мг', width: 100 },
        { field: 'iron_per_month', headerName: 'Железо, мг', width: 100 },
        { field: 'potassium_per_month', headerName: 'Калий, мг', width: 80 },
        { field: 'vitamin_d_per_month', headerName: 'D, мкг', width: 80 },
        {
            field: 'available',
            headerName: 'Доступен',
            width: 120,
            align: 'center',
            renderCell: (params) =>
                params.value ? <CheckIcon style={{ color: 'green' }} /> : <BlockIcon style={{ color: 'red' }} />,
        },
    ];

    return (
        <Container className={styles.container}>
            {eatLists && eatLists.length > 0 ? (
                <Box>
                    <Typography variant='h5'>Сформированные списки продуктов</Typography>
                    <DataGrid
                        columns={columns}
                        editMode='row'
                        pageSizeOptions={[5, 10]}
                        rows={eatLists}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        onRowClick={onRowClick}
                    />
                </Box>
            ) : (
                <Typography variant='body1'>Создайте свой первый список покупок, и он появится здесь</Typography>
            )}
            {/* {eatLists?.map((eatList, index) => (
                <EatListItem
                    key={index}
                    listId={eatList.id}
                    name={eatList.name}
                />
            ))} */}
            {selectedEatList ? (
                <Box sx={{ mt: 6 }}>
                    <EatListItem
                        key={selectedEatList.id}
                        listId={selectedEatList.id}
                        name={selectedEatList.name}
                    />
                </Box>
            ) : null}
        </Container>
    );
};
