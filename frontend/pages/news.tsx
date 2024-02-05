import Layout from '../Menu'
import {
    CardContent,
    CardHeader,
    Avatar,
    Typography,
    Card,
    Link,
} from '@mui/material'
import { news } from '../storage'
import { green } from '@mui/material/colors'
import Copyright from '../Copyright'
import './App.css'

export default function News() {
    return (
        <div>
            <Layout />
            <div>
                <div className="InboxArea">
                    <div className="column">
                        {news.map((news: any) => (
                            <Card
                                sx={{
                                    maxWidth: 750,
                                    height: 'fit-content',
                                    mt: 5,
                                }}
                            >
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            aria-label="recipe"
                                            sx={{ bgcolor: green[500] }}
                                        >
                                            C
                                        </Avatar>
                                    }
                                    title={news.title}
                                    subheader={news.date}
                                />
                                <CardContent>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {news.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                        <Copyright sx={{ mt: 5 }} />
                    </div>
                </div>{' '}
            </div>
        </div>
    )
}
