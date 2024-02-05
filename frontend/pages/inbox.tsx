import Layout from '../Menu';
import {
    CardContent,
    CardHeader,
    Avatar,
    Typography,
    Card,
    CardActions,
    Button,
    TextField,
    IconButton,
} from '@mui/material';
import { Send } from '@mui/icons-material';
import Copyright from '../Copyright';
import './App.css';
import * as React from 'react';
export default function Inbox() {
    return (
        <div>
            <Layout />
            <div className="InboxArea">
                <div className="column">
                    <Card
                        sx={{ maxWidth: '50vw', height: 'fit-content', mt: 5 }}
                        className="message"
                    >
                        <CardHeader
                            avatar={<Avatar aria-label="recipe">R</Avatar>}
                            title="Hello"
                            subheader="2 september 2023"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish
                                and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the
                                mussels, if you like.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Mark as Read</Button>
                        </CardActions>
                        <TextField
                            variant="standard"
                            sx={{ padding: 2, width: 705 }}
                            placeholder="Reply"
                            InputProps={{
                                endAdornment: (
                                    <IconButton>
                                        <Send />
                                    </IconButton>
                                ),
                            }}
                        />
                    </Card>
                    <Copyright sx={{ mt: 5 }} />
                </div>
            </div>
        </div>
    );
}
