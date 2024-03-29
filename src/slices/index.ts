import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {LayoutSlice} from './Layout/reducer';
import {AuthSlice} from './Auth/AuthSlice';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {CalendarSlice} from './Calendar/reducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['Layout']
};

const rootReducer = combineReducers({
    Layout: LayoutSlice.reducer,
    Auth: AuthSlice.reducer,
    Calendar: CalendarSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
});
export const persist = persistStore(store);
