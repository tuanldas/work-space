import {createAsyncThunk} from '@reduxjs/toolkit';
import {callApiLogin} from '../../ApiCaller/AuthApi';

export const loginAction = createAsyncThunk(
    'login/loginAction',
    async (param: { email: string, password: string }) => {
        const response = await callApiLogin(param.email, param.password);
        console.log(response);
    }
);
