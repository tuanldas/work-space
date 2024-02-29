import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {LoginSlice} from './Login/LoginSlice';
import {LayoutSlice} from './layouts/reducer';


const rootReducer = combineReducers({
    Layout: LayoutSlice.reducer,
    Login: LoginSlice.reducer
});

export const store = configureStore({reducer: rootReducer, devTools: true});
