import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Form from '../app/form/index'
import CssBaseline from '@mui/material/CssBaseline'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import { Button, Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Layout from '../Menu'
import Copyright from '../Copyright'
import SideBySideGrid from '../app/Grid/SBSG'
import './App.css'

const defaultTheme = createTheme()

type LoginData = {
    email: String
    password: String
    rememberMe: boolean
}

function initLoginData(): LoginData {
    return {
        email: '',
        password: '',
        rememberMe: false,
    }
}

export default function SignInSide() {
    const [loginData, setLoginData] = React.useState<LoginData>(initLoginData())
    const form = [
        {
            type: 'text',
            name: 'email',
            id: 'email',
            label: 'Email Address',
        },
        {
            type: 'password',
            name: 'password',
            id: 'password',
            label: 'Password',
        },
        {
            type: 'checkbox',
            label: 'Remember me',
            id: 'rememberMe',
        },
    ]

    const handleChange = (key: string, value: any) => {
        setLoginData((loginData) => ({ ...loginData, [key]: value }))
    }

    console.log(loginData)

    return (
        <ThemeProvider theme={defaultTheme}>
            <Layout />
            <SideBySideGrid>
                <CssBaseline />
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: 500,
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <Form
                            components={form}
                            data={loginData}
                            onChange={handleChange}
                        />
                        <Button variant="contained" fullWidth>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/forgotpassword" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                        <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Box>
            </SideBySideGrid>
        </ThemeProvider>
    )
}
