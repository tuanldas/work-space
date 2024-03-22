import {createAsyncThunk} from '@reduxjs/toolkit';
import {loginActionError, loginActionSuccess, logoutActionSuccess, STATE_NAME} from './AuthSlice';
import {callApiLogin} from '../../ApiCaller/AuthApi';
import {AxiosError} from 'axios';

export const logoutAction = createAsyncThunk(
    `${STATE_NAME}/logoutAction`,
    async (_param, {dispatch}) => {
        localStorage.clear();
        dispatch(logoutActionSuccess());
    }
);

export const loginAction = createAsyncThunk(
    'login/loginAction',
    async (param: { email: string, password: string }, {dispatch}) => {
        try {
            const response = await callApiLogin(param.email, param.password);
            localStorage.setItem('access_token', response.data.access_token);
            dispatch(loginActionSuccess(response.data));
        } catch (error) {
            if (error instanceof AxiosError && error.response !== undefined) {
                if (error && error.response && error.response.status === 401) {
                    dispatch(loginActionError('Tài khoản hoặc mật khẩu không đúng.'));
                } else {
                    dispatch(loginActionError('Có sự cố xảy ra khi xác thực tài khoản. Vui lòng thử lại!'));
                }
            }
        }
    }
);
