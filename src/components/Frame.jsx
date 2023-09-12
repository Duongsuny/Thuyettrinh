import { Button, Typography } from '@mui/material';
import Background from '../assets/background.png';

export default function Frame() {
    return (
        <>
            <Typography variant="h1">CORE TEAM</Typography>
            <Button variant="flat">Click me also</Button>
            <Button variant="second">Click here!</Button>
            <img url={Background} alt='cannot loaded' />
        </>
    );
}