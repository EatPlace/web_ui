import { Link, Typography } from '@mui/material';

export function Copyright(props: any) {
    return (
        <Typography
            align='center'
            color='text.secondary'
            variant='body2'
            {...props}
        >
            {'Copyright © '}
            <Link
                color='inherit'
                href='https://mui.com/'
            >
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
