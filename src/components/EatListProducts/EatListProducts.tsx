import type { ProfileProduct } from '@api/generatedApi';
import BlockIcon from '@mui/icons-material/Block';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import type { FC } from 'react';

type EatListProductsProps = {
    products: ProfileProduct[] | undefined;
};

export const EatListProducts: FC<EatListProductsProps> = ({ products }) => {
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Название', width: 180 },
        { field: 'price', headerName: 'Цена', width: 100 },
        { field: 'count', headerName: 'Цена', width: 100 },
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
        <Box>
            {products && products.length > 0 ? (
                <>
                    <DataGrid
                        columns={columns}
                        editMode='row'
                        pageSizeOptions={[5, 10]}
                        rows={products}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                    />
                </>
            ) : (
                <Typography variant='body1'>В этом списке пока нет продуктов</Typography>
            )}
        </Box>
    );
};
