import React from 'react';
import Menu from './menu';

type LayoutProps = {
    children?: React.ReactNode | React.Children | null;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="page">
            <Menu />
            {children}
        </div>
    );
}
