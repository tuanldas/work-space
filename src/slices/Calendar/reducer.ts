import {createSlice} from '@reduxjs/toolkit';
import {LayoutState} from './type';


export const initialState: LayoutState = {
    message: null,
    items: [],
    isFetching: false
};

export const CalendarSlice = createSlice({
    name: 'CalendarSlice',
    initialState,
    reducers: {}
});

export const {} = CalendarSlice.actions;
