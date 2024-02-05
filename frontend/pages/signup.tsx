import * as React from 'react'
import { useRouter } from 'next/navigation'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Form from '../app/form/index'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Paper } from '@mui/material'
import Layout from '../Menu'
import Copyright from '../Copyright'
import './App.css'
import { User } from '../domain'
import {signup} from '../requests'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

function initUser(): User {
    return {
        name: '',
        email: '',
        password: '',
    }
}

export default function SignUp() {
    const [user, setUser] = React.useState<User>(initUser());

    const form = [
        {
            type: 'text',
            name: 'name',
            id: 'name',
            label: 'Name',
        },
        {
            type: 'text',
            name: 'email',
            id: 'email',
            label: 'Email Address',
        },
        {
            type: 'text',
            name: 'password',
            id: 'password',
            label: 'Password',
        },
        {
            type: 'checkbox',
            id: 'checkbox',
            label: 'checkbox',
        },
    ]

    const handleChange = (key: string, value: any) => {
        setUser((user) => ({ ...user, [key]: value }))
    }

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        signup(user).then(() => {
            router.push('/signin')
        })
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Layout />
            <div className="alignCenter">
                <Paper sx={{ padding: 3, width: 500 }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            noValidate
                            sx={{ mt: 3 }}
                        >
                            <Grid container spacing={2}>
                                <Form
                                    data={user}
                                    components={form}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/signin" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Paper>
            </div>
        </ThemeProvider>
    )
}
