import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    access_token: '',
    token_type: 'Bearer',
    expires_at: '',
    user_information: {
        uuid: '',
        name: ''
    }
};

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
});

export const {} = AuthSlice.actions;
