import { AppBar, Typography, Toolbar, Button } from '@mui/material';

export default function Layout() {
    return (
        <AppBar position="relative">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" color="inherit" noWrap>
                    <a href="/">Campus DPS</a>
                </Typography>
                <div>
                    <Button
                        color="inherit"
                        sx={{ fontSize: 15, padding: 1, ml: 1 }}
                        href="/news"
                    >
                        News
                    </Button>
                    <Button
                        color="inherit"
                        sx={{ fontSize: 15, padding: 1, ml: 1 }}
                        href="/inbox"
                    >
                        Inbox
                    </Button>
                    <Button
                        color="inherit"
                        sx={{ fontSize: 15, padding: 1 }}
                        href="/fee"
                    >
                        Fee
                    </Button>
                </div>
                <div className="authorization">
                    <Button
                        color="inherit"
                        sx={{ fontSize: 15, padding: 1, mr: 1 }}
                        href="/signup"
                    >
                        Sign Up
                    </Button>
                    <Button
                        color="inherit"
                        sx={{ fontSize: 15, padding: 1 }}
                        href="/signin"
                    >
                        Sign In
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}
