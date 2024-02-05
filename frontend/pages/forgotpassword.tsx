import React from 'react';
import { TextField, Paper, Avatar, Typography, Button } from '@mui/material';
import LockResetIcon from '@mui/icons-material/LockReset';
import './App.css';

export default function ForgotPassword() {
    const [email, setEmail] = React.useState<string>('');
    return (
        <div className="alignCenter">
            <Paper
                sx={{
                    padding: 3,
                    width: 400,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockResetIcon />
                </Avatar>
                <Typography variant="h4">Forgot Password</Typography>
                <TextField
                    fullWidth
                    sx={{ mt: 10 }}
                    label="Email Address"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button variant="contained" fullWidth sx={{ mt: 4 }}>
                    Resest Password
                </Button>
            </Paper>
        </div>
    );
}
