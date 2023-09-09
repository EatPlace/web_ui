import {
    useCreateNewEatListEatListsPostMutation,
    useCreateNewListProductEatListsListIdProductsPostMutation,
    useCreateNewProductProductsPostMutation,
    useGetProfileProfileGetQuery,
} from '@api/generatedApi';
import { Box, Button, Container, TextField } from '@mui/material';
import type { FC } from 'react';
import React from 'react';

type TestButtonsProps = {
    selectedListId: number | null;
};

import styles from './TestButtons.module.css';
export const TestButtons: FC<TestButtonsProps> = ({ selectedListId }) => {
    const [createEatList] = useCreateNewEatListEatListsPostMutation();
    const [createProduct] = useCreateNewProductProductsPostMutation();
    const [addListProduct] = useCreateNewListProductEatListsListIdProductsPostMutation();

    const { refetch: refetchProfile } = useGetProfileProfileGetQuery();

    const onEatListCreate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const eatListName = data.get('name') as string;
        if (eatListName && eatListName.length > 0) {
            createEatList({
                eatListCreate: {
                    name: eatListName,
                },
            });
            refetchProfile();
        }
    };

    const onProductCreate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const productName = data.get('product-name') as string;
        if (productName && productName.length > 0) {
            createProduct({
                productCreate: {
                    available: true,
                    calcium: 20,
                    calories: 150,
                    currency_id: 1,
                    iron: 1,
                    link: 'https://lavka.yandex.ru/213/good/marmelad-dolki-limonnye-marmelandiya-udarnica-250-gram',
                    name: productName,
                    potassium: 100,
                    price: 100,
                    source_id: 1,
                    total_carb: 25,
                    total_fat: 5,
                    total_protein: 1,
                    type_id: 1,
                    vitamin_d: 2,
                    weight: 250,
                },
            });
        }
    };

    const onProductAdd = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const productName = data.get('product-name') as string;
        if (!selectedListId || !productName || productName.length < 1) return;
        let productId = null;

        createProduct({
            productCreate: {
                available: true,
                calcium: 20,
                calories: 150,
                currency_id: 1,
                iron: 1,
                link: 'https://lavka.yandex.ru/213/good/marmelad-dolki-limonnye-marmelandiya-udarnica-250-gram',
                name: productName,
                potassium: 100,
                price: 100,
                source_id: 1,
                total_carb: 25,
                total_fat: 5,
                total_protein: 1,
                type_id: 1,
                vitamin_d: 2,
                weight: 250,
            },
        })
            .unwrap()
            .then((response) => {
                console.log(response.id);
                productId = response.id;
                console.log(productId);
                if (!productId) return;
                addListProduct({
                    listId: selectedListId,
                    eatListProductCreate: {
                        count: 5,
                        price: 1800,
                        product_id: productId,
                    },
                });
            });
    };

    return (
        <Container className={styles.inlineContainer}>
            <Box
                noValidate
                className={styles.inlineContainer}
                component='form'
                onSubmit={onEatListCreate}
            >
                <TextField
                    fullWidth
                    required
                    autoComplete='name'
                    id='name'
                    label='EatList name'
                    name='name'
                    size='small'
                />
                <Button
                    type='submit'
                    variant='contained'
                >
                    Создать
                </Button>
            </Box>
            <Box
                noValidate
                className={styles.inlineContainer}
                component='form'
                onSubmit={onProductCreate}
            >
                <TextField
                    fullWidth
                    required
                    autoComplete='Мармеладки'
                    id='product-name'
                    label='Product name'
                    name='product-name'
                    size='small'
                />
                <Button
                    type='submit'
                    variant='contained'
                >
                    Создать
                </Button>
            </Box>
            {selectedListId && (
                <Box
                    noValidate
                    className={styles.inlineContainer}
                    component='form'
                    onSubmit={onProductAdd}
                >
                    <TextField
                        fullWidth
                        required
                        autoComplete='Мармеладки'
                        id='product-name'
                        label='Product name'
                        name='product-name'
                        size='small'
                    />
                    <Button
                        type='submit'
                        variant='contained'
                    >
                        Добавить
                    </Button>
                </Box>
            )}
        </Container>
    );
};
