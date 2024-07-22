import {createSlice} from "@reduxjs/toolkit";
import {InitialStateType} from "./type.tsx";
import moment from "moment/moment";

const initialState: InitialStateType = {
    accessToken: '',
    refreshToken: '',
    expiresIn: '',
    tokenType: '',
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuthData(state, action) {
            state.accessToken = action.payload.access_token;
            state.refreshToken = action.payload.refresh_token;
            state.expiresIn = moment().add(action.payload.expires_in, 'seconds').format('YYYY-MM-DD HH:mm:ss');
            state.tokenType = action.payload.token_type;
        },
        clearAuthData(state) {
            state.accessToken = '';
            state.refreshToken = '';
            state.expiresIn = '';
            state.tokenType = '';
        },
    },
});

export const {setAuthData, clearAuthData} = authSlice.actions;
export const authReducer = authSlice.reducer;
