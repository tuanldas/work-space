import {RootState} from '../index.tsx';
import {createSelector} from 'reselect';

const selectState = (state: RootState) => state.authSlice;

export const selectAuthSlice = createSelector(
    selectState,
    (authSlice) => ({ ...authSlice })
);
