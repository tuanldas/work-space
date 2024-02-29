import {combineReducers} from 'redux';
import LayoutReducer from './layouts/reducer';
import {configureStore} from '@reduxjs/toolkit';


const rootReducer = combineReducers({
    Layout: LayoutReducer,
});

export const store = configureStore({reducer: rootReducer, devTools: true});
