import {createSlice} from '@reduxjs/toolkit';
import {LayoutState} from './type';
import {getEvents} from './actions';


export const initialState: LayoutState = {
    message: null,
    items: [],
    isFetching: false
};

export const CalendarSlice = createSlice({
    name: 'CalendarSlice',
    initialState,
    reducers: {
        getEventsSuccess: (state, action) => {
            state.items = action.payload;
            state.isFetching = false;
        },
        getEventsError: (state) => {
            state.isFetching = false;
            state.message = 'Lấy dữ liệu thất bại. Vui lòng thử lại!';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getEvents.pending, (state) => {
                state.message = null;
                state.items = [];
                state.isFetching = false;
            });

    }
});

export const {
    getEventsSuccess,
    getEventsError
} = CalendarSlice.actions;
