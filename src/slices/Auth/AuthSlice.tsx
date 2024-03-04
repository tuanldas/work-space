import {createSlice} from '@reduxjs/toolkit';
import {loginAction} from './actions';

const initialState = {
    access_token: null,
    token_type: 'Bearer',
    expires_at: null,
    user_information: {
        uuid: null,
        name: null
    },
    login: {
        isPending: false,
        successMessage: '',
        errorMessage: ''
    }
};
export const STATE_NAME = 'authSlice';

export const AuthSlice = createSlice({
    name: STATE_NAME,
    initialState,
    reducers: {
        loginActionSuccess(state, action) {
            state.login.isPending = false;
            state.login.successMessage = 'Đăng nhập thành công.';
            state.access_token = action.payload.access_token;
            state.expires_at = action.payload.expires_at;
            state.token_type = action.payload.token_type;
            state.user_information = action.payload.user_information;
        },
        loginActionError(state, action) {
            state.login.isPending = false;
            state.login.errorMessage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAction.pending, (state) => {
            state.login.isPending = true;
            state.login.successMessage = '';
            state.login.errorMessage = '';
        });
    }
});

export const {
    loginActionSuccess,
    loginActionError
} = AuthSlice.actions;
