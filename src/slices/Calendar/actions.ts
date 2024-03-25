import {callApiGetEvents} from '../../ApiCaller/CalendarApi';
import {GetEventsOptions} from './type';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {getEventsError, getEventsSuccess} from './reducer';

export const getEvents = createAsyncThunk(
    `CalendarSlice/getEvents`, async (options: GetEventsOptions, {dispatch}) => {
        try {
            const {data, status} = await callApiGetEvents(options);
            if (status === 200) {
                dispatch(getEventsSuccess(data.data));

            }
        } catch (error) {
            dispatch(getEventsError());
        }
    });
