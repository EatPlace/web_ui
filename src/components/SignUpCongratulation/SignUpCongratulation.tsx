import CelebrationIcon from '@mui/icons-material/Celebration';
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import type { FC } from 'react';
import * as React from 'react';

type SignUpCongratulationProps = {
    onConfirm: () => void | undefined;
};

import styles from './SignUpCongratulation.module.css';
export const SignUpCongratulation: FC<SignUpCongratulationProps> = ({ onConfirm }) => {
    return (
        <Container className={styles.centerContainer}>
            <Container className={styles.inlineContainer}>
                <Typography
                    color='success'
                    variant='h5'
                >
                    Поздравляем!
                </Typography>
                <CelebrationIcon
                    color='secondary'
                    fontSize='large'
                />
            </Container>
            <Container className={styles.inlineContainer}>
                <Typography
                    color='success'
                    variant='h6'
                >
                    Осталось только
                </Typography>
                <Button
                    color='secondary'
                    sx={{ margin: 1 }}
                    variant='contained'
                    onClick={onConfirm}
                >
                    Войти
                </Button>
            </Container>
        </Container>
    );
};
