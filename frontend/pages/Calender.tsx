import * as React from 'react';
import dayjs from 'dayjs';
import { Paper } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './App.css';
export default function DateCalendarViews() {
    return (
        <div>
            <div className="zoomedIn alignCenter">
                <h1> Calendar </h1>
                <div>
                    <Paper sx={{ width: 350 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar
                                defaultValue={dayjs(
                                    new Date().getFullYear() +
                                        '-' +
                                        new Date().getMonth() +
                                        '-' +
                                        new Date().getDay()
                                )}
                                views={['year', 'month', 'day']}
                            />
                        </LocalizationProvider>
                    </Paper>
                </div>
            </div>
        </div>
    );
}
