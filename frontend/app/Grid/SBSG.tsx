import { Grid, Paper } from '@mui/material';
type SBSGProps = {
    children: any;
};

export default function SideBySideGrid({ children }: SBSGProps) {
    return (
        <div>
            <Grid container component="main" sx={{ height: '92.5vh' }}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light'
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></Grid>
                <Grid
                    item
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    {children}
                </Grid>
            </Grid>
        </div>
    );
}
