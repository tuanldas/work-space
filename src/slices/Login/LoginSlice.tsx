import {createSlice} from "@reduxjs/toolkit";
import {loginAction} from './actions';

const initialState = {
    isPending: false,
    errorMessage: '',
    successMessage: ''
};

export const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginAction.pending, (state) => {
            state.isPending = true
            state.successMessage = ''
            state.errorMessage = ''
        })
    }
});

export const {} = LoginSlice.actions;
