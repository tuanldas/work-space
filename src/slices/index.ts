import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {LayoutSlice} from './layouts/reducer';
import {AuthSlice} from './Auth/AuthSlice';


const rootReducer = combineReducers({
    Layout: LayoutSlice.reducer,
    Auth: AuthSlice.reducer
});

export const store = configureStore({reducer: rootReducer, devTools: true});
