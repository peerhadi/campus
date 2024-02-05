import { AppBar, Typography, Toolbar, Button } from '@mui/material';
import React from 'react';

type MenuItem = {
    href: string;
    title: string;
};

function SubMenu({ items }: { items: Array<MenuItem> }) {
    return (
        <div>
            {items.map((item, index) => (
                <Button
                    key={index}
                    color="inherit"
                    sx={{ fontSize: 15, padding: 1, ml: 1 }}
                    href={item.href}
                >
                    {item.title}
                </Button>
            ))}
        </div>
    );
}

export default function Menu() {
    const topMenu = React.useMemo(
        () => [
            { href: '/news', title: 'News' },
            { href: '/inbox', title: 'Inbox' },
            { href: '/fee', title: 'Fee' },
        ],
        []
    );

    const authMenu = React.useMemo(
        () => [
            { href: '/signin', title: 'Sign in' },
            { href: '/signup', title: 'Sign up' },
        ],
        []
    );

    return (
        <AppBar position="relative">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" color="inherit" noWrap>
                    <a href="/">Campus DPS</a>
                </Typography>
                <SubMenu items={topMenu} />
                <SubMenu items={authMenu} />
            </Toolbar>
        </AppBar>
    );
}
