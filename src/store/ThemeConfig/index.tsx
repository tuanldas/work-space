import {createSlice} from '@reduxjs/toolkit';
import {InitialStateType} from './type.tsx';

const initialState: InitialStateType = {
};

const themeConfig = createSlice({
    name: 'themeConfig',
    initialState,
    reducers: {
    },
});

export const {} = themeConfig.actions;
export const themeConfigReducer = themeConfig.reducer;
